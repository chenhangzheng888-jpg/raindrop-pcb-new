'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CoursesAdmin() {
  const [title, setTitle] = useState('')
  const [videoFile, setVideoFile] = useState(null)
  const [courses, setCourses] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      router.push('/login')
    }
    // 从 localStorage 读取课程列表
    const saved = localStorage.getItem('courses')
    if (saved) setCourses(JSON.parse(saved))
  }, [router])

  const handleUpload = (e) => {
    e.preventDefault()
    if (!title || !videoFile) return alert('请填写标题并选择视频')

    // 模拟上传：把视频转为本地 URL（仅在当前浏览器有效）
    const videoUrl = URL.createObjectURL(videoFile)
    const newCourse = {
      id: Date.now(),
      title,
      videoUrl,
      fileName: videoFile.name
    }

    const updated = [...courses, newCourse]
    setCourses(updated)
    localStorage.setItem('courses', JSON.stringify(updated))
    alert('课程上传成功！')
    setTitle('')
    setVideoFile(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">课程管理</h1>
      <form onSubmit={handleUpload} className="bg-white p-6 rounded shadow mb-8 max-w-lg">
        <div className="mb-4">
          <label className="block mb-2">课程标题</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">选择视频文件</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full"
            required
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          上传课程
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">已上传课程</h2>
      <div className="grid gap-4">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-gray-500 text-sm">{course.fileName}</p>
            <video controls className="mt-2 w-full max-w-md">
              <source src={course.videoUrl} />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
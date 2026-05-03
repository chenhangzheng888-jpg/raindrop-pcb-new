'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // 检查登录状态
    if (localStorage.getItem('isAdmin') !== 'true') {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">管理后台</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <Link href="/admin/courses" className="bg-white p-6 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2">课程管理</h2>
          <p className="text-gray-600">上传视频、编辑课程信息</p>
        </Link>
        <Link href="/admin/questions" className="bg-white p-6 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-2">题库管理</h2>
          <p className="text-gray-600">添加/修改面试题目</p>
        </Link>
      </div>
    </div>
  )
}
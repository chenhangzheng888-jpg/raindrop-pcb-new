export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-2">雨滴PCB学习站</h1>
      <p className="text-center text-gray-600 mb-10">从零到一，成为能上岗的PCB硬件工程师</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/courses" className="p-5 border rounded-lg text-center">
          <h3>📚 课程中心</h3>
          <p>查看所有PCB课程</p>
        </a>
        <a href="/questions" className="p-5 border rounded-lg text-center">
          <h3>📝 面试题库</h3>
          <p>刷题备战面试</p>
        </a>
        <a href="/study" className="p-5 border rounded-lg text-center">
          <h3>🧑‍🎓 学习中心</h3>
          <p>我的课程与进度</p>
        </a>
      </div>
    </main>
  )
}
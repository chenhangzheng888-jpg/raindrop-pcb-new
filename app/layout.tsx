import './globals.css'

export const metadata = {
  title: '雨滴PCB学习站',
  description: 'PCB设计培训、面试题库、实战课程'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <nav className="bg-black text-white p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <a href="/">首页</a>
            <a href="/courses">课程中心</a>
            <a href="/questions">面试题库</a>
            <a href="/study">学习中心</a>
            <a href="/login" className="ml-auto">登录/注册</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
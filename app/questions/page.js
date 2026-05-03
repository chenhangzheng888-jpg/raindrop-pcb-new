'use client'
import { useState } from 'react'

export default function Questions() {
  const questions = [
    { q: 'PCB中GND一般是什么作用？', options: ['供电', '接地回流', '传输数据', '控制信号'], ans: 1 },
    { q: '以下哪个属于高速信号？', options: ['5V电源', 'HDMI', 'LED灯', '按键'], ans: 1 }
  ]

  const [current, setCurrent] = useState(0)
  const [showAns, setShowAns] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-5 py-10">
      <h2 className="text-2xl font-bold mb-6">PCB面试题库</h2>
      <div className="border p-6 rounded-lg">
        <p className="font-bold">Q{current + 1}：{questions[current].q}</p>
        {questions[current].options.map((item, i) => (
          <div key={i} className="p-2 border rounded mb-2">{i + 1}、{item}</div>
        ))}
        <button onClick={() => setShowAns(true)} className="mt-4 mr-3 px-4 py-2 border">查看答案</button>
        <button onClick={() => { setCurrent(current + 1); setShowAns(false) }} className="mt-4 px-4 py-2 bg-black text-white">下一题</button>
        {showAns && <div className="mt-4 text-green-600 font-bold">正确答案：{questions[current].ans + 1}</div>}
      </div>
    </div>
  )
}
'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClient()

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({ email, password })
    alert('登录成功')
  }

  const handleRegister = async () => {
    await supabase.auth.signUp({ email, password })
    alert('注册成功，请查收邮箱')
  }

  return (
    <div className="max-w-md mx-auto p-5 mt-10 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">登录 / 注册</h2>
      <input className="w-full border p-2 mb-2" placeholder="邮箱" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full border p-2 mb-4" type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="w-full bg-black text-white p-2 mb-2">登录</button>
      <button onClick={handleRegister} className="w-full border p-2">注册</button>
    </div>
  )
}
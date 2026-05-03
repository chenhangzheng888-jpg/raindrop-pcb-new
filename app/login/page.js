'use client'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // 固定管理员账户（硬编码，只有这个能登录）
  const ADMIN_EMAIL = '443905849@qq.com'
  const ADMIN_PASSWORD = 'chz15875539436'

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // 严格校验账户密码
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // 登录成功 → 跳转到后台主页
      window.location.href = '/'
    } else {
      setError('邮箱或密码错误')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '5rem auto', padding: '2rem' }}>
      <h2>管理员登录</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>邮箱</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>
        <div>
          <label>密码</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>
        {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
        <button
          type="submit"
          style={{ padding: '0.7rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          登录
        </button>
      </form>
    </div>
  )
}
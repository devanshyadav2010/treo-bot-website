import { signIn } from 'next-auth/client'

export default function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result.error) {
      // handle login error
      console.error(result.error)
    } else {
      // redirect to home page
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  )
}

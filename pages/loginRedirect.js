import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default function LoginRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
  }, [])

  return null
}

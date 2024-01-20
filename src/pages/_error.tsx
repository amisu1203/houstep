import { useRouter } from "next/router"
import { useEffect } from "react"

function ErrorPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return null
}

export default ErrorPage

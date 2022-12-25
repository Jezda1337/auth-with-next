import LoginButton from "./login-btn"

export default function Header() {
  return (
    <header className="my-4">
      <div className="max-w-5xl mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Logo</h1>
          <LoginButton />
        </nav>
      </div>
    </header>
  )
}

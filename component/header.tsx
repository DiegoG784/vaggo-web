export default function Header() {
  return (
    <header className="
      sticky top-0 z-50
      w-full
      bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600
      shadow-md
    ">
      <div className="container-default flex items-center justify-between h-14">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="
            w-10 h-10
            rounded-full
            bg-white/20
            flex items-center justify-center
            backdrop-blur-sm
            transition
            group-hover:bg-white/30
          ">
            <img
              src="/icons/globe.ico"
              width={20}
              height={20}
              alt="Logo"
            />
          </div>

          <span className="text-white font-semibold text-lg tracking-tight">
            Vaggo
          </span>
        </a>

        {/* User Icon */}
        <a
          href="/login"
          className="
            w-10 h-10
            rounded-full
            bg-white/20
            flex items-center justify-center
            backdrop-blur-sm
            transition
            hover:bg-white/30
          "
        >
          <img
            src="/icons/user-silhouette.ico"
            width={20}
            height={20}
            alt="Usuário"
          />
        </a>

      </div>
    </header>
  )
}

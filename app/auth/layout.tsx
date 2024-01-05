export default function AuthLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <h1>AuthLayout</h1>
        {children}
      </div>
    )
  }
export default function AuthLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="page bg-[#dce6ef]">
        <div className="h-full container max-w-[1440px] mx-auto">
          {children}  
        </div>
      </div>
    )
  }
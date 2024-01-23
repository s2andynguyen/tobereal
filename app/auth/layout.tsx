import WrapperHeader from "@/layouts/WrapperHeader"

export default function AuthLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="w-full min-h-screen h-screen sm:overflow-hidden bg-white sm:bg-[#dce6ef]
       sm:min-h-none
      ">
          <div className="block sm:hidden"><WrapperHeader fixedOnMbile/></div>
          <div className="h-full container max-w-[1440px] mx-auto">
            {children}  
          </div>

      </div>
    )
  }
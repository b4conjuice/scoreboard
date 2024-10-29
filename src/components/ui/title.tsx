export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='text-center text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10'>
      {children}
    </h1>
  )
}

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1400px] px-4 md:px-8 ${className}`}>
    {children}
  </div>
)

export default Container
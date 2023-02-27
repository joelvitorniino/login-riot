export default function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold ml-2">
          <span className="ml-6">Sign In</span>
        </h1>
      </div>

      <input type="text" name="username" placeholder="username" className="px-4 py-2 border rounded-md capitalize relative top-24 block" />
    </div>
  )
}
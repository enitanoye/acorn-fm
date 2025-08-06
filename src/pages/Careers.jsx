function Careers() {
    return (
      <div>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Acorn Team</h1>
            <p className="text-lg md:text-xl mb-8">
              We’re always on the lookout for skilled technicians, security personnel, cleaners, and facility managers.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Open Roles</h2>
            <p className="text-lg mb-6">No open roles currently. Submit your CV to be considered for future opportunities.</p>
            <form className="max-w-lg mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label htmlFor="cv" className="block text-lg font-medium">Upload CV</label>
                <input type="file" id="cv" className="w-full p-3 border rounded-lg" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Submit CV
              </button>
            </form>
            <div className="text-center mt-8">
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                View Open Roles →
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Careers;
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { title: "5 Reasons to Invest in Preventive Maintenance", slug: "preventive-maintenance" },
    { title: "What to Expect from a Facility Management Provider", slug: "fm-provider" },
    { title: "How to Improve Energy Efficiency in Your Building", slug: "energy-efficiency" },
  ];

  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl mb-8">Insights and tips on facility management.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-blue-600 hover:underline font-semibold">
              Read the Blog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
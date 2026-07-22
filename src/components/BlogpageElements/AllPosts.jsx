import BlogPostCard from "./BlogPostCard";

const posts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "The Role of AI in Accounting and Audit",
    description: "Discover how Artificial Intelligence is transforming accounting and audit functions with automation and insights...",
    author: "Praveen Miglani",
    date: "March 25, 2024",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Mergers & Acquisitions: Key Considerations for a Successful Deal",
    description: "Learn essential factors beyond financial numbers that determine M&A success and long-term value...",
    author: "Sanket Agrawal",
    date: "April 14, 2025",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6694542/pexels-photo-6694542.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Navigating Tax Compliance in a Changing Landscape: UK Perspective",
    description: "Understand how UK tax compliance is evolving with digital requirements and global reforms...",
    author: "Ankush Tiwari",
    date: "March 25, 2025",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/5833772/pexels-photo-5833772.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Navigating Tax Compliance in a Changing Landscape: US Perspective",
    description: "How US businesses can adapt to evolving IRS regulations and state-level requirements...",
    author: "Vasu Narula",
    date: "Jan 25, 2025",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7054801/pexels-photo-7054801.jpeg",
    title: "The Importance of Audits and How the Landscape is Changing",
    description: "Explore how audits are evolving from compliance checks to strategic tools for insight...",
    author: "Manish Pulwaria",
    date: "Feb 25, 2025",
  }
];

const AllPosts = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-black mb-12">
        All Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;

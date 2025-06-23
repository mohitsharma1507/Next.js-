const Blog = async (props) => {
  const { slug } = await props.params;
  return (
    <>
      <h1>Blog</h1>
    </>
  );
};

export default Blog;

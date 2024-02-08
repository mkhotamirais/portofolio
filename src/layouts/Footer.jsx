const Footer = () => {
  const year = new Date();
  return <footer className="h-16 border-t flex items-center justify-center">Copyright &copy; {year.getFullYear()}</footer>;
};

export default Footer;

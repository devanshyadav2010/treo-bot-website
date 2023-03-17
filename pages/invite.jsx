import { useRouter } from 'next/router';

export default async function invite() {
  // function body

  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.com/oauth2/authorize?client_id=1016392200516550736&permissions=2146958591&scope=bot%20applications.commands' });
  res.end();

  return {
    props: {},
  };
}

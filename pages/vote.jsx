import { useRouter } from 'next/router';

export default function support() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://top.gg/bot/1016392200516550736/vote' });
  res.end();

  return {
    props: {},
  };
}

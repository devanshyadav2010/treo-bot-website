import { useRouter } from 'next/router';

export default function invite() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://top.gg' });
  res.end();

  return {
    props: {},
  };
}

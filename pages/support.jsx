import { useRouter } from 'next/router';

export default function support() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://discord.com/invite/JaNCZvPxMQ' });
  res.end();

  return {
    props: {},
  };
}

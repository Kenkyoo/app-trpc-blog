import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import Link from 'next/link';

type PostProps = {
  title: string;
  id: string;
  text: string;
};

export default function Post({ title, id, text }: PostProps) {
  return (
    <Card>
      <Link className="text-gray-400" href={`/post/${id}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{text}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Link>
    </Card>
  );
}

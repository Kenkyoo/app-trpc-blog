import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dev by:</CardTitle>
        <CardDescription>Kenkyo</CardDescription>
      </CardHeader>
      <CardContent>
        <p>See my other repos:</p>
        <a href="https://github.com/Kenkyoo">Github</a>
      </CardContent>
      <CardFooter>
        <p className="mx-2">With</p>
        <Heart color="purple"/>
      </CardFooter>
    </Card>
  );
}

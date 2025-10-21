import { useRouter } from 'next/router'
import { trpc } from '~/utils/trpc'
import DashboardLayout from '~/layout/dashboard-layout'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import Link from 'next/link';
import { Button } from '~/components/ui/button';

export default function PostPage() {
  const id = useRouter().query.id as string
  const postQuery = trpc.post.byId.useQuery({ id })

  if (postQuery.isLoading) return <div className="p-8 text-center">Cargando...</div>
  if (!postQuery.data) return <div className="p-8">No se encontró el post</div>

  const post = postQuery.data
  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center py-10 gap-4">
<Button><Link href={"/"}>Back</Link></Button>
    <Card className="mt-8"> 
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{post.text}</p>
        </CardContent>
        <CardFooter>
          <p>Creado el {post.createdAt.toLocaleDateString('es-AR')}</p>
        </CardFooter>
    </Card>
  </div>
    </DashboardLayout>
  )
}

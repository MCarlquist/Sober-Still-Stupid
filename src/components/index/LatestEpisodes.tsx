import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

type YoutubeItem = {
    id: {
        videoId?: string
        channelId?: string
    }
    snippet: {
        title: string
        description: string
        thumbnails?: {
            high?: { url: string }
            medium?: { url: string }
            default?: { url: string }
        }
    }
}

export function LatestEpisodes({ items }: { items: YoutubeItem[] }) {
   
    
    return (
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
                <Card className="relative mx-auto w-full max-w-sm pt-0 flex-auto flex flex-col" id={item.id.videoId}>
                    <img
                        src={
                            item.snippet.thumbnails?.high?.url ??
                            item.snippet.thumbnails?.medium?.url ??
                            item.snippet.thumbnails?.default?.url
                        }
                        alt={item.snippet.title}
                        className="aspect-video w-full object-cover"
                    />
                    <CardHeader>
                        <CardAction>
                            <Badge variant="secondary">Episode {index + 1}</Badge>
                        </CardAction>
                        <CardTitle>{item.snippet.title}</CardTitle>
                        <CardDescription className="grow">{item.snippet.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank">
                            <Button className="w-full">
                            Watch Episode
                        </Button>
                        </a>
                    </CardFooter>
                    
                </Card>
            ))}
        </div>
    )
}

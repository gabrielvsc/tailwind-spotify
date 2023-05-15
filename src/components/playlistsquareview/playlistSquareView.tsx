import Image from 'next/image';

interface PlaylistSquareViewProps {
    imageSrc: string;
    title: string;
    author: string;
}

export default function PlaylistSquareView({ imageSrc, title, author }: PlaylistSquareViewProps) {
    return (
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src={`/${imageSrc}`} className="w-full rounded-md" width={120} height={120} alt=""/>
            <strong>{title}</strong>
            <span className="text-sm text-zinc-500">{author}</span>
        </a>
    )
}
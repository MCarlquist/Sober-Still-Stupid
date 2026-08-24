import { createServerFn } from "@tanstack/react-start";

export const getYoutubeChannel = createServerFn().handler(async () => {
    const excludedVideoIds = new Set(['5wzA9T23Hjs', 'D4Hw3gX5lE4']);
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
        throw new Error('YOUTUBE_API_KEY is not configured');
    }

    const params = new URLSearchParams({
        part: 'snippet',
        order: 'date',
        channelId: 'UCQ2W9SPUU1ZOIsWGpRDx63w',
        type: 'video',
        maxResults: '50',
        key: apiKey,
    });

    const url = `https://youtube.googleapis.com/youtube/v3/search?${params.toString()}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Http Error: ${response.status}`);
        const data = await response.json();
        return {
            ...data,
            items: data.items
                .filter(
                    (item: { id?: { videoId?: string } }) =>
                        !excludedVideoIds.has(item.id?.videoId ?? ''),
                ),
        };
    } catch (error) {
        console.error('fetch error: ', error);
        return {
            items: [],
            error: 'YouTube episodes are temporarily unavailable.',
        };
    }

});
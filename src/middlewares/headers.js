exports.createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Cache-Control': 's-max-age=1, stale-while-revalidate'
    }
}


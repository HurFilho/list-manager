exports.createHeaders = () => {
    return {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 's-max-age=1, stale-while-revalidate'
    }
}


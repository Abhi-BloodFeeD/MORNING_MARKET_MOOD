// Market data API endpoint
// Returns mock market data for demonstration
// In a real implementation, this would connect to external data sources

export async function GET({ url }) {
  try {
    // Get query parameters
    const symbol = url.searchParams.get('symbol') || 'SPY';
    const timeframe = url.searchParams.get('timeframe') || '1d';
    const limit = parseInt(url.searchParams.get('limit') || '30');

    // Generate mock market data
    const data = [];
    let price = 100 + Math.random() * 50; // Starting price between 100-150

    for (let i = 0; i < limit; i++) {
      // Generate realistic price movement
      const changePercent = (Math.random() - 0.5) * 0.04; // -2% to +2% change
      price = price * (1 + changePercent);

      const volume = Math.floor(1000000 + Math.random() * 9000000); // 1M-10M volume

      data.push({
        timestamp: Date.now() - (limit - i - 1) * 24 * 60 * 60 * 1000, // Daily intervals
        open: Number((price * (0.98 + Math.random() * 0.04)).toFixed(2)),
        high: Number((price * (1.0 + Math.random() * 0.03)).toFixed(2)),
        low: Number((price * (0.97 + Math.random() * 0.03)).toFixed(2)),
        close: Number(price.toFixed(2)),
        volume: volume
      });

      // Slightly adjust price for next iteration to maintain continuity
      price = data[i].close;
    }

    return new Response(
      JSON.stringify({
        symbol: symbol.toUpperCase(),
        timeframe,
        data: data,
        lastUpdated: new Date().toISOString(),
        count: data.length
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60' // Cache for 1 minute
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch market data',
        message: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
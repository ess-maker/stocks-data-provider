export type StockData = {
    ticker: string;
    queryCount: number;
    resultsCount: number;
    adjusted: boolean;
    results: {
      v: number;
      vw: number;
      o: number;
      c: number;
      h: number;
      l: number;
      t: number;
      n: number;
    }[];
    status: string;
    request_id: string;
    count: number;
  };

  export type ApiResponse =  {
    afterHours
    : 
    number
    close
    : 
   number
    from
    : 
    string
    high
    : 
   number
    low
    : 
    number
    open
    : 
    number
    preMarket
    : 
    number
    status
    : 
    string
    symbol
    : 
    string
    volume
    : 
    number
  }

  export type results =  {
    c: number;
    h: number;
    l: number;
    n: number;
    o: number;
    t: number;
    v: number;
    vw: number;
  }

  

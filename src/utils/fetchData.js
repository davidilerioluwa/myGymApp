

export const fetchData=async (url,options)=>{
    const response=await fetch(url,options)
    const data=await response.json()

    return data
}

export const fetchOptions= {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const youtubeOPtions={
 
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '931cd1d57fmshedc9d92938b6bddp16df02jsnaa3fe76aaf0c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}
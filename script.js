const arr=[];
const fortracks=fetch('https://api.napster.com/v2.0/tracks/top?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj')
fortracks.then((trackdata)=>{
    trackdata.json().then((trackdata)=>{
        // console.log(trackdata)
        trackdata.tracks.map((e,i)=>{
            arr.push(e)
            const first=document.createElement('div')
            first.classList.add('card')
            
            
            const second=document.createElement('div')
            second.classList.add('card-border-top')

            const third=document.createElement('div')
            third.classList.add('img')

            const forth=document.createElement('span')
            forth.innerHTML=e.name

            const fifth=document.createElement('p')
            fifth.classList.add('job')
            fifth.innerText=e.artistName

            const sixth=document.createElement('button')
            sixth.innerHTML="Play"
            sixth.addEventListener('click', ()=>{
                document.querySelector('.audi').src=e.previewURL
                document.querySelector('.audi').play()

            })
            first.append(second, third, forth, fifth, sixth)
            document.querySelector('.for-tracks').append(first)
        })
    })
})
// for playlists
const forplaylists=fetch('https://api.napster.com//v2.2/playlists/featured?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj')
forplaylists.then((playlistsdata)=>{
    playlistsdata.json().then((playlistsdata)=>{
        // console.log(playlistsdata)
        playlistsdata.playlists.map((e,i)=>{

            const plattrack=fetch('https://api.napster.com/v2.2/playlists/'+e.id+'/tracks?limit=1&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj')
plattrack.then((trackdata)=>{
    trackdata.json().then((trackdata)=>{
        // console.log(trackdata);
        trackdata.tracks.map((e,i)=>{
            arr.push(e)
            const first=document.createElement('div')
            first.classList.add('card')
            
            const second=document.createElement('div')
            second.classList.add('card-border-top')

            const third=document.createElement('div')
            third.classList.add('img')

            const forth=document.createElement('span')
            forth.innerHTML=e.name

            const fifth=document.createElement('p')
            fifth.classList.add('job')
            fifth.innerText=e.artistName+" Singles"

            const sixth=document.createElement('button')
            sixth.innerHTML="Play"
            sixth.addEventListener('click', ()=>{
                document.querySelector('.audi').src=e.previewURL
                document.querySelector('.audi').play()

            })
            first.append(second, third, forth, fifth, sixth)
            document.querySelector('.forplay').append(first)
        })
    })
})

            
        })

    })
})
// console.log(arr);
// for albums

const foralbum=fetch('https://api.napster.com/v2.0/albums/top?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj')
foralbum.then((albumdata)=>{
    albumdata.json().then((albumdata)=>{
        console.log(albumdata)

        albumdata.albums.map((e,i)=>{
            const first=document.createElement('div')
            first.classList.add('card')
            
            const second=document.createElement('div')
            second.classList.add('card-border-top')

            const third=document.createElement('div')
            third.classList.add('img')

            const forth=document.createElement('span')
            forth.innerHTML=e.name

            const fifth=document.createElement('p')
            fifth.classList.add('job')
            fifth.innerText=e.artistName

            const sixth=document.createElement('button')
            sixth.innerHTML="Play"
            first.append(second, third, forth, fifth, sixth)
            document.querySelector('.for-albums').append(first)
        })
    })
})

// 
// trial code
// const altrack=fetch('https://api.napster.com/v2.2/albums/'+e.id+'/tracks?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj')
// altrack.then((albumtrack)=>{
//     albumtrack.json().then((albumtrack)=>{
        
//     })
// })

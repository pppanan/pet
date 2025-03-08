var config = {
    style: 'mapbox://styles/panpannn/cm7yochlk00vw01sd7ax8a9bn',
    accessToken: 'pk.eyJ1IjoicGFucGFubm4iLCJhIjoiY203eXF4ejZyMGVqejJtczY2a29lYXFtNiJ9.nJCR6CKfUZdlfFMSYaeDoA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Where are Pet-friendly Places?',
    subtitle: 'Pet-friendly Spots Distribution',
    byline: 'By Pan Ruoming',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Pet-friendly City —— Singapore',
            description: 'In 2019, the number of dog licenses held in Singapore was approximately 70,000. By 2023, this figure had risen to 114,000. In 2024, 32% of people in Singapore own pets.  <a href="https://golocad.com/blog/pet-market-in-singapore/"> <strong>Read more</strong></a> <br><br> There is a higher demand of pet-friendly spots among pet owners. In this storytelling map, we focus on the existing pet-friendly spots and the areas needed to be improved. This first map shows the location of pet-friendly spots and parks with dogrun.<br><br><img src="asset/pet.png" style="height:100%;width:350px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 0
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 1               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 0
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 0
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 1               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 0.5
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Access from HDB',
            description: 'We calculated 5, 10, and 15-minute walking isochrones from pet-friendly spots to assess their accessibility.<br><br>This visualization shows which areas are covered by walking isochrones and which HDB areas lack such pet-friendly facilities.<br><br>In this mapping, we found that HDBs in the CBD, central area and east area had good accessibility to the pet-friendly spots. It is easier for residents to travel and hang out with their dogs.<br><br><img src="asset/LEGEND1.png" style="height:100%; width:150px;"></img>',
            location: {
                center: [103.84304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 1
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 0               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 1
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 1
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 0               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 1
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Jurong West/ Jurong East/ Bukit Panjang',
            description: 'This mapping shows that the western areas, including Jurong West, Jurong East, and Bukit Panjang, lack pet-friendly spots. Pet owners need to travel longer distances to reach pet-friendly restaurants. Additionally, there is a lack of park facilities such as dog runs around HDBs, resulting in limited social spaces for pets.<br><br><img src="asset/LEGEND2.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.69280, 1.34981],
                zoom: 13.5,
                pitch: 45,
                bearing: 0,
                speed: 10, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 1
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 0               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 1
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 1
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 0               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 0.5
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'A Model for Pet-Friendly Urban Spaces：Bishan - Ang Mo Kio Park Dog Run',
            description: 'Bishan - Ang Mo Kio Park Dog Run serves as a key pet-friendly facility in the central region, significantly enhancing the accessibility of open spaces for pet owners. As one of the largest and most well-equipped dog runs in Singapore, it provides a safe and spacious environment for dogs to exercise and socialize off-leash.<br><br>The presence of such amenities reduces the need for pet owners to travel long distances in search of suitable spaces, addressing the growing demand for pet-friendly infrastructure in high-density residential areas.<br><br><img src="asset/dogrun.png" style="height:100%; width:300px;"></img>',
            location: {
                center: [103.846448, 1.3609],
                zoom: 14.4,
                pitch: 60,
                bearing: 0,
                speed: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 0
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 1               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 1
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdboutside-6p9ptz',
                    opacity: 0
                },
                {
                    layer: 'hdb-5i9o3x',
                    opacity: 1               
                },
                {
                    layer: 'park-d9fua3',
                    opacity: 1                
                },
                {
                    layer: 'cafe-isochrones-37s4a8',
                    opacity: 1
                },
                {
                    layer: 'cafe-0sr2q1',
                    opacity: 1
                }
            ]
        }
    ]
};
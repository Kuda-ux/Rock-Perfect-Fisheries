$src = "images"
$dst = "public/images"
New-Item -ItemType Directory -Force -Path $dst | Out-Null

$map = @{
  "WhatsApp Image 2026-04-23 at 22.37.16.jpeg"      = "pond-excavation.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.16(1).jpeg"   = "fingerlings-bags.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.19.jpeg"      = "stocking-ceremony.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.22.jpeg"      = "harvest-farmer.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.23.jpeg"      = "damliner-pond.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.23(1).jpeg"   = "pond-green-fish.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.24.jpeg"      = "harvest-net-tilapia.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.25.jpeg"      = "predator-bird-net.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.29.jpeg"      = "feed-grid.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.29(1).jpeg"   = "feed-growers.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.29(2).jpeg"   = "feed-starter3.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.30.jpeg"      = "feed-starter2.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.30(1).jpeg"   = "feed-starter1.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.30(2).jpeg"   = "feed-juvenile.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.31.jpeg"      = "tilapia-scale.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.31(1).jpeg"   = "predator-net-rolls.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.32.jpeg"      = "pond-net-cover.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.32(1).jpeg"   = "water-chemical.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.32(2).jpeg"   = "harvest-net-pulled.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.32(3).jpeg"   = "fish-jumping.jpg"
  "WhatsApp Image 2026-04-23 at 22.37.33.jpeg"      = "nile-tilapia.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.02.jpeg"      = "trainer-hands.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.02(1).jpeg"   = "stocking-pond.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.02(2).jpeg"   = "trophy-tilapia.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.03.jpeg"      = "tilapia-duckweed.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.03(1).jpeg"   = "community-harvest.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.04.jpeg"      = "release-fingerlings.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.04(1).jpeg"   = "market-sale.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.04(4).jpeg"   = "pond-blue-pipe.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.04(5).jpeg"   = "pond-liner-install.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.05.jpeg"      = "massive-harvest.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.10.jpeg"      = "damliner-truck.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.11.jpeg"      = "fingerlings-truck.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.11(1).jpeg"   = "pond-tour.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.56.jpeg"      = "team-pond1.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.57.jpeg"      = "team-pond2.jpg"
  "WhatsApp Image 2026-04-23 at 22.52.57(1).jpeg"   = "team-pond3.jpg"
}

foreach ($k in $map.Keys) {
  $from = Join-Path $src $k
  $to   = Join-Path $dst $map[$k]
  if (Test-Path $from) { Copy-Item $from $to -Force }
}
Write-Host "Done. Files in public/images:"
Get-ChildItem $dst | Select-Object Name, Length

echo "Process Started!"
git clone https://github.com/itublockchain/ETHBerlin-1
echo "Cloned!"
mv ETHBerlin-1 chimera
echo "Renamed"
cd chimera
echo "cd chimera"
cd packages
echo "cd packages"
cd backend
echo "cd backend"
npm run initialize_backend
npm run start_backend

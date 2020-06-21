# ngp-chart-app
This vue web application displays a draggable bitcoin price chart.

## Clone repository
```
git clone https://github.com/patattard/ngpchart
```

## Go to project directory
```
cd ngpchart
```

## Build Docker image
```
docker build -t ngp-chart-app .
```

## Run Docker Container
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 ngp-chart-app
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Run tests
```
npm run test:unit
```
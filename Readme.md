# POC #01 - Node & React Setup

## Agile Management Board
- Link: [Github Project Board](https://github.com/users/OfficialApurvChatur/projects/18)

## System Architecture

### 01. High Level Design (HLD)
```mermaid
  sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    participant Database

    User -->> Frontend : ui req
    Frontend -->> Backend : api req
    Backend -->> Database : data req
    Database -->> Backend : data res
    Backend -->> Frontend : api res
    Frontend -->> User : ui res
```

### 02. Low Level Design (LLD)

#### 01.01. Git Branching & PR Strategies Setup LLD
```mermaid
  sequenceDiagram
    actor Developer
    participant feature/*
    participant develop
    participant test
    participant stage
    participant prod

    Developer -->> develop : switch
    develop -->> feature/* : create
    feature/* -->> feature/* : push
    feature/* -->> develop : merge
    develop -->> test : merge
    test -->> stage : merge
    stage -->> prod : merge
    prod -->> develop : merge
    develop -->> Developer : pull
```

#### 01.02. Project Overview Setup LLD
#### 01.03. Environmnet Setup LLD
#### 01.04. Playwright Setup LLD
#### 01.05. Servers & DNS Setup LLD
#### 01.06. CI/CD Deployment Setup LLD 

## Servers & DNS

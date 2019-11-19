# RennesGo

## code

- [X] ****Base****: mettre le code sur un git
vous pourrez rajouter des fonctionnalités, modifier le front-end et le back-end comme vous le souhaitez (ne commencez pas par cette étape).

## test

### backend

- [ ] ****Base****: test unitaire
- [X] ****Base****: mise en place convention code (checkstyle)
- [X] ****Base****: mise en place d'outil d'analyse de code (spotbugs)
- [X] ****Base****: mise en place mesure couverture de code (echec si < x)
- [X] ****Base****: mise en place mesure de mutation extreme
(ces mises en place se font dans le fichier maven pom.xml, cf. le fichier du projet CPOO de l'an dernier).
- [ ] ajouter des tests de sécurité
- [ ] ajouter des tests de performance
- [ ] écrire un petit outil d'analyse de code avec Spoon pour detecter de nouveaux problèmes.

### frontend

- [ ] **Base**: test front-end unitaire (nécessite de mocker le backend, et l'API REST), avec https://www.protractortest.org
- [ ] **Base**: test système (front + back)
- [ ] **Base**: mise en place convention code
- [ ] **Base**: mise en place d'outil d'analyse de code TypeScript
- [ ] **Base**: mise en place mesure couverture de code (echec si < x)
- [ ] ajouter des tests de sécurité

## build

- [X] **Base**: écrire 2 jenkinsfile pour décrire comme le front et le back sont construits
- [X] **Base**: installer un jenkins sur vos machines perso ou ailleurs (si pas possible alors me contacter) et utiliser les jenkinsfile le principe du devops est que les outils bloquent le build s'ils ne sont pas contents : le code doit être de la meilleure qualité possible.

## package

- [ ] **Base**: écrire 2 dockerfile qui lanceront le back et le front comme des micro-services (cf les dockerfile du projet CPOO de l'an dernier).

## deploy

- [X] **Base**: se débrouiller pour faire du continuous delivery: à chaque nouveau build, les images docker sont déployées sur votre machine, un serveur, etc.
- [ ] comment garder une session ouverte alors que le service est remplacé? => trouver une solution
- [ ] comment avoir de la redondance côté back-end pour tenir des pannes?


## operate

- [ ] faire du chaos engineering.
- [ ] faire du A/B testing.


## monitor

- [ ] log des informations utiles
- [ ] utiliser des techniques pour analyser les logs et extraire des infos utiles (data science).
- [ ] identifier et faire remonter les crashs

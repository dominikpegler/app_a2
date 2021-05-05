## App A2

* Name:	Dominik Pegler
* Matr.-Nr.:	a01468373
* Gruppe:	1


### Implementierung

**Framework**:	
[React Native]

**API-Version**:	
[Android / iOS ]

**Gerät(e), auf dem(denen) getestet wurde**:  
[Pixel2, iPhone 6s]

**Externe Libraries und Frameworks**:  
react-navigation, react-native-elements, expo-status-bar

**Dauer der Entwicklung**:  
[13 Stunden]
(ohne Vorerfahrung)
- 6 h App-Aufbau und API-Calls
- 6 h Favourites-Liste inkl. Buttons und Callbacks
- 1 h Kompilieren (apk über Expo)

### Weitere Anmerkungen:  
2 Dinge kann man noch verbessern:
- Performance Artist-Suche: 1 API-Call nach z.B. 3 eingegebenen Zeichen, anschlieszend kann man diese Liste bei weiteren Zeicheneingaben oder bei Bestaetigung lokal durchsuchen, ohne einen weiteren API-Call anzustoszen. Derzeit 1 API-Call nach jedem eingegebenen neuen Zeichen.
- Funktionen zum Hinzufuegen/Entfernen von eines Artists von der Favs-List werden derzeit ueber react-navigation initialParams weitergereicht. Das fuehrt zu einer derzeit harmlosen Warnung. Diese habe ich unterdrueckt. In Zukunft koennte man die Funktionen aber ueber die Options durchreichen. Dafuer muss ich noch die Doku lesen.

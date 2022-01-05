import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_43_4393}>
        <View style={styles.View_I43_4393_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I43_4393_17_223_11_116}
          />
        </View>
        <View style={styles.View_I43_4393_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I43_4393_17_224_11_127}
          />
          <View style={styles.View_I43_4393_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I43_4393_17_224_11_129}
            />
            <View style={styles.View_I43_4393_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I43_4393_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I43_4393_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I43_4393_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I43_4393_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I43_4393_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I43_4393_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I43_4393_17_224_11_148}
            />
            <View style={styles.View_I43_4393_17_224_11_155}>
              <View style={styles.View_I43_4393_17_224_11_156}>
                <Text style={styles.Text_I43_4393_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_43_4430}>
        <View style={styles.View_I43_4430_17_1228}>
          <View style={styles.View_I43_4430_17_1228_17_1192} />
          <View style={styles.View_I43_4430_17_1228_17_1193}>
            <View style={styles.View_I43_4430_17_1228_17_1194}>
              <View style={styles.View_I43_4430_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I43_4430_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I43_4430_17_1228_17_1197}>
              <View style={styles.View_I43_4430_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I43_4430_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I43_4430_17_1228_17_1200}>
              <View style={styles.View_I43_4430_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I43_4430_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I43_4430_17_1228_17_1203}>
            <View style={styles.View_I43_4430_17_1228_17_1204}>
              <Text style={styles.Text_I43_4430_17_1228_17_1204}>
                Search Online Table
              </Text>
            </View>
          </View>
          <View style={styles.View_I43_4430_17_1228_17_1206}>
            <View style={styles.View_I43_4430_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I43_4430_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_46_1931}>
        <View style={styles.View_46_1858}>
          <View style={styles.View_I46_1858_46_1711} />
          <View style={styles.View_I46_1858_46_1712}>
            <View style={styles.View_I46_1858_46_1713}>
              <View style={styles.View_I46_1858_46_1713_44_4562} />
              <View style={styles.View_I46_1858_46_1713_44_4563}>
                <Text style={styles.Text_I46_1858_46_1713_44_4563}>Other</Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1714}>
              <View style={styles.View_I46_1858_46_1714_44_4562} />
              <View style={styles.View_I46_1858_46_1714_44_4563}>
                <Text style={styles.Text_I46_1858_46_1714_44_4563}>
                  Monthly
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1715}>
              <View style={styles.View_I46_1858_46_1715_44_4562} />
              <View style={styles.View_I46_1858_46_1715_44_4563}>
                <Text style={styles.Text_I46_1858_46_1715_44_4563}>
                  Every two weeks
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1716}>
              <View style={styles.View_I46_1858_46_1716_44_4562} />
              <View style={styles.View_I46_1858_46_1716_44_4563}>
                <Text style={styles.Text_I46_1858_46_1716_44_4563}>Weekly</Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1717}>
              <View style={styles.View_I46_1858_46_1717_44_4562} />
              <View style={styles.View_I46_1858_46_1717_44_4563}>
                <Text style={styles.Text_I46_1858_46_1717_44_4563}>
                  One session
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1718}>
            <Text style={styles.Text_I46_1858_46_1718}>Frecuency</Text>
          </View>
          <View style={styles.View_I46_1858_46_1719}>
            <Text style={styles.Text_I46_1858_46_1719}>
              What table are you looking for...?
            </Text>
          </View>
          <View style={styles.View_I46_1858_46_1720}>
            <View style={styles.View_I46_1858_46_1720_44_4562} />
            <View style={styles.View_I46_1858_46_1720_44_4563}>
              <Text style={styles.Text_I46_1858_46_1720_44_4563}>
                Show recorded or streamed tables
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1721}>
            <View style={styles.View_I46_1858_46_1721_43_4467}>
              <Text style={styles.Text_I46_1858_46_1721_43_4467}>
                Coincidence with keywords...
              </Text>
            </View>
            <View style={styles.View_I46_1858_46_1721_43_4468} />
            <View style={styles.View_I46_1858_46_1721_44_4573}>
              <Text style={styles.Text_I46_1858_46_1721_44_4573}>
                Dragon, Adventure, King, ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1722}>
            <View style={styles.View_I46_1858_46_1722_46_1641}>
              <View style={styles.View_I46_1858_46_1722_46_1641_43_4467}>
                <Text style={styles.Text_I46_1858_46_1722_46_1641_43_4467}>
                  Language (choose one)
                </Text>
              </View>
              <View style={styles.View_I46_1858_46_1722_46_1641_43_4468} />
              <View style={styles.View_I46_1858_46_1722_46_1641_44_4573}>
                <Text style={styles.Text_I46_1858_46_1722_46_1641_44_4573}>
                  English
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e8/fab6/da2529bd75bcc16f60a69613d41357d5"
              }}
              style={styles.ImageBackground_I46_1858_46_1722_46_1642}
            />
          </View>
          <View style={styles.View_I46_1858_46_1723}>
            <View style={styles.View_I46_1858_46_1723_43_4467}>
              <Text style={styles.Text_I46_1858_46_1723_43_4467}>
                Playing any of these games
              </Text>
            </View>
            <View style={styles.View_I46_1858_46_1723_43_4468} />
            <View style={styles.View_I46_1858_46_1723_44_4573}>
              <Text style={styles.Text_I46_1858_46_1723_44_4573}>
                DnD 5e, Pathfinder, Deadlands, ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1724}>
            <View style={styles.View_I46_1858_46_1724_44_4562} />
            <View style={styles.View_I46_1858_46_1724_44_4563}>
              <Text style={styles.Text_I46_1858_46_1724_44_4563}>
                Show tables with Adult Content (18+)
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1725}>
            <View style={styles.View_I46_1858_46_1725_44_4562} />
            <View style={styles.View_I46_1858_46_1725_44_4563}>
              <Text style={styles.Text_I46_1858_46_1725_44_4563}>
                Show only tables that accept new players
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1726}>
            <View style={styles.View_I46_1858_46_1726_45_1621} />
            <View style={styles.View_I46_1858_46_1726_45_1622}>
              <Text style={styles.Text_I46_1858_46_1726_45_1622}>Button</Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1727}>
            <View style={styles.View_I46_1858_46_1727_43_4467}>
              <Text style={styles.Text_I46_1858_46_1727_43_4467}>VTT App</Text>
            </View>
            <View style={styles.View_I46_1858_46_1727_43_4468} />
            <View style={styles.View_I46_1858_46_1727_44_4573}>
              <Text style={styles.Text_I46_1858_46_1727_44_4573}>
                Roll20, Foundry VTT, Discord, ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1728}>
            <View style={styles.View_I46_1858_46_1729}>
              <View style={styles.View_I46_1858_46_1729_44_4562} />
              <View style={styles.View_I46_1858_46_1729_44_4563}>
                <Text style={styles.Text_I46_1858_46_1729_44_4563}>Sunday</Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1730}>
              <View style={styles.View_I46_1858_46_1730_44_4562} />
              <View style={styles.View_I46_1858_46_1730_44_4563}>
                <Text style={styles.Text_I46_1858_46_1730_44_4563}>
                  Saturday
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1731}>
              <View style={styles.View_I46_1858_46_1731_44_4562} />
              <View style={styles.View_I46_1858_46_1731_44_4563}>
                <Text style={styles.Text_I46_1858_46_1731_44_4563}>Friday</Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1732}>
              <View style={styles.View_I46_1858_46_1732_44_4562} />
              <View style={styles.View_I46_1858_46_1732_44_4563}>
                <Text style={styles.Text_I46_1858_46_1732_44_4563}>
                  Thursday
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1733}>
              <View style={styles.View_I46_1858_46_1733_44_4562} />
              <View style={styles.View_I46_1858_46_1733_44_4563}>
                <Text style={styles.Text_I46_1858_46_1733_44_4563}>
                  Wednesday
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1734}>
              <View style={styles.View_I46_1858_46_1734_44_4562} />
              <View style={styles.View_I46_1858_46_1734_44_4563}>
                <Text style={styles.Text_I46_1858_46_1734_44_4563}>
                  Tuesday
                </Text>
              </View>
            </View>
            <View style={styles.View_I46_1858_46_1735}>
              <View style={styles.View_I46_1858_46_1735_44_4562} />
              <View style={styles.View_I46_1858_46_1735_44_4563}>
                <Text style={styles.Text_I46_1858_46_1735_44_4563}>Monday</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I46_1858_46_1736}>
            <Text style={styles.Text_I46_1858_46_1736}>
              It will be played in any of these days:
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_43_4393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I43_4393_17_223: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I43_4393_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I43_4393_17_224: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I43_4393_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I43_4393_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I43_4393_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I43_4393_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I43_4393_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4393_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4393_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4393_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I43_4393_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I43_4393_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I43_4393_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I43_4393_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I43_4393_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I43_4393_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_4430: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_4430_17_1228: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_4430_17_1228_17_1192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I43_4430_17_1228_17_1193: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I43_4430_17_1228_17_1194: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I43_4430_17_1228_17_1195: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4430_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I43_4430_17_1228_17_1197: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_I43_4430_17_1228_17_1198: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4430_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I43_4430_17_1228_17_1200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_I43_4430_17_1228_17_1201: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4430_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I43_4430_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_4430_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I43_4430_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I43_4430_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I43_4430_17_1228_17_1207: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I43_4430_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_46_1931: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_46_1858: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("141%"),
    minHeight: hp("141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I46_1858_46_1711: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 39, 39, 1)"
  },
  View_I46_1858_46_1712: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("90%")
  },
  View_I46_1858_46_1713: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1713_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1713_44_4563: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1713_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1714: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1714_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1714_44_4563: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1714_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1715: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1715_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1715_44_4563: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1715_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1716: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1716_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1716_44_4563: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1716_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1717: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1717_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1717_44_4563: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1717_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1718: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1719: {
    flexGrow: 1,
    width: wp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1720: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("124%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1720_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1720_44_4563: {
    flexGrow: 1,
    width: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1720_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1721: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1721_43_4467: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1721_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1721_43_4468: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1721_44_4573: {
    flexGrow: 1,
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1721_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1722: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1722_46_1641: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1722_46_1641_43_4467: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1722_46_1641_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1722_46_1641_43_4468: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1722_46_1641_44_4573: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1722_46_1641_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I46_1858_46_1722_46_1642: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("6%")
  },
  View_I46_1858_46_1723: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1723_43_4467: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1723_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1723_43_4468: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1723_44_4573: {
    flexGrow: 1,
    width: wp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1723_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1724: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1724_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1724_44_4563: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1724_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1725: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("108%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1725_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1725_44_4563: {
    flexGrow: 1,
    width: wp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1725_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1726: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1726_45_1621: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 4, 4, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1726_45_1622: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1726_45_1622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1727: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1727_43_4467: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1727_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1727_43_4468: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1727_44_4573: {
    flexGrow: 1,
    width: wp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1727_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1728: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%")
  },
  View_I46_1858_46_1729: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1729_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1729_44_4563: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1729_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1730: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1730_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1730_44_4563: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1730_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1731: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1731_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1731_44_4563: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1731_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1732: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1732_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1732_44_4563: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1732_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1733: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1733_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1733_44_4563: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1733_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1734: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1734_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1734_44_4563: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1734_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1735: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_1858_46_1735_44_4562: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I46_1858_46_1735_44_4563: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1735_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_1858_46_1736: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_I46_1858_46_1736: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

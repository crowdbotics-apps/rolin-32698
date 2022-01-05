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
      <View style={styles.View_21_1539}>
        <View style={styles.View_I21_1539_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I21_1539_17_223_11_116}
          />
        </View>
        <View style={styles.View_I21_1539_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I21_1539_17_224_11_127}
          />
          <View style={styles.View_I21_1539_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I21_1539_17_224_11_129}
            />
            <View style={styles.View_I21_1539_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I21_1539_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I21_1539_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I21_1539_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I21_1539_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I21_1539_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I21_1539_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I21_1539_17_224_11_148}
            />
            <View style={styles.View_I21_1539_17_224_11_155}>
              <View style={styles.View_I21_1539_17_224_11_156}>
                <Text style={styles.Text_I21_1539_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_1577}>
        <View style={styles.View_I22_1577_17_1228}>
          <View style={styles.View_I22_1577_17_1228_17_1192} />
          <View style={styles.View_I22_1577_17_1228_17_1193}>
            <View style={styles.View_I22_1577_17_1228_17_1194}>
              <View style={styles.View_I22_1577_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I22_1577_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I22_1577_17_1228_17_1197}>
              <View style={styles.View_I22_1577_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I22_1577_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I22_1577_17_1228_17_1200}>
              <View style={styles.View_I22_1577_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I22_1577_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I22_1577_17_1228_17_1203}>
            <View style={styles.View_I22_1577_17_1228_17_1204}>
              <Text style={styles.Text_I22_1577_17_1228_17_1204}>
                My Friends
              </Text>
            </View>
          </View>
          <View style={styles.View_I22_1577_17_1228_17_1206}>
            <View style={styles.View_I22_1577_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I22_1577_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_24_1722}>
        <View style={styles.View_I24_1722_36_1915}>
          <View style={styles.View_I24_1722_24_1682}>
            <View style={styles.View_I24_1722_24_1682_23_1629} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0940/f913/f4862f83abd62ae8fd1426feddcc85eb"
              }}
              style={styles.ImageBackground_I24_1722_24_1682_23_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d05d/2c39/d5f2fa06e6e5377e77fdd5451dd7a7a8"
              }}
              style={styles.ImageBackground_I24_1722_24_1682_23_1631}
            />
            <View style={styles.View_I24_1722_24_1682_23_1632}>
              <Text style={styles.Text_I24_1722_24_1682_23_1632}>
                Hey there! I was looking a group for playing D&amp;D...
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1682_23_1633}>
              <Text style={styles.Text_I24_1722_24_1682_23_1633}>
                Kathryn Murphy
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1682_23_1634}>
              <Text style={styles.Text_I24_1722_24_1682_23_1634}>Happy</Text>
            </View>
            <View style={styles.View_I24_1722_24_1682_23_1635}>
              <Text style={styles.Text_I24_1722_24_1682_23_1635}>7:25 PM</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
              }}
              style={styles.ImageBackground_I24_1722_24_1682_42_2830}
            />
          </View>
          <View style={styles.View_I24_1722_24_1683}>
            <View style={styles.View_I24_1722_24_1683_23_1629} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0940/f913/f4862f83abd62ae8fd1426feddcc85eb"
              }}
              style={styles.ImageBackground_I24_1722_24_1683_23_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aac/d2a5/a83013ee366bca5148dfa25962a4d0c1"
              }}
              style={styles.ImageBackground_I24_1722_24_1683_23_1631}
            />
            <View style={styles.View_I24_1722_24_1683_23_1632}>
              <Text style={styles.Text_I24_1722_24_1683_23_1632}>
                May I join to your table?
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1683_23_1633}>
              <Text style={styles.Text_I24_1722_24_1683_23_1633}>
                Guy Hawkins
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1683_23_1634}>
              <Text style={styles.Text_I24_1722_24_1683_23_1634}>Amused</Text>
            </View>
            <View style={styles.View_I24_1722_24_1683_23_1635}>
              <Text style={styles.Text_I24_1722_24_1683_23_1635}>10:45 AM</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
              }}
              style={styles.ImageBackground_I24_1722_24_1683_42_2830}
            />
          </View>
          <View style={styles.View_I24_1722_24_1680}>
            <View style={styles.View_I24_1722_24_1680_23_1629} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0940/f913/f4862f83abd62ae8fd1426feddcc85eb"
              }}
              style={styles.ImageBackground_I24_1722_24_1680_23_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a908/deb9/15caa45d88a0c9b8cc99fdcb29c2235b"
              }}
              style={styles.ImageBackground_I24_1722_24_1680_23_1631}
            />
            <View style={styles.View_I24_1722_24_1680_23_1632}>
              <Text style={styles.Text_I24_1722_24_1680_23_1632}>
                I am creating a Pathfinder campaign, if you are interested...
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1680_23_1633}>
              <Text style={styles.Text_I24_1722_24_1680_23_1633}>
                Courtney Henry
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1680_23_1634}>
              <Text style={styles.Text_I24_1722_24_1680_23_1634}>Ecstatic</Text>
            </View>
            <View style={styles.View_I24_1722_24_1680_23_1635}>
              <Text style={styles.Text_I24_1722_24_1680_23_1635}>9:32 AM</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4489/7a07/022a48bb74efb7ec7107ea8f407609e3"
              }}
              style={styles.ImageBackground_I24_1722_24_1680_42_2830}
            />
          </View>
          <View style={styles.View_I24_1722_24_1681}>
            <View style={styles.View_I24_1722_24_1681_23_1629} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0940/f913/f4862f83abd62ae8fd1426feddcc85eb"
              }}
              style={styles.ImageBackground_I24_1722_24_1681_23_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21c/1117/dd2367805c76f445fde0e156a9585903"
              }}
              style={styles.ImageBackground_I24_1722_24_1681_23_1631}
            />
            <View style={styles.View_I24_1722_24_1681_23_1632}>
              <Text style={styles.Text_I24_1722_24_1681_23_1632}>
                You are invited to come to my place whenever you want. I collect
                cool miniatures :)
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1681_23_1633}>
              <Text style={styles.Text_I24_1722_24_1681_23_1633}>
                Ronald Richards
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1681_23_1634}>
              <Text style={styles.Text_I24_1722_24_1681_23_1634}>Angry</Text>
            </View>
            <View style={styles.View_I24_1722_24_1681_23_1635}>
              <Text style={styles.Text_I24_1722_24_1681_23_1635}>9:21 AM</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4489/7a07/022a48bb74efb7ec7107ea8f407609e3"
              }}
              style={styles.ImageBackground_I24_1722_24_1681_42_2830}
            />
          </View>
          <View style={styles.View_I24_1722_24_1684}>
            <View style={styles.View_I24_1722_24_1684_23_1629} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0940/f913/f4862f83abd62ae8fd1426feddcc85eb"
              }}
              style={styles.ImageBackground_I24_1722_24_1684_23_1630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd80/57b0/eed6eef68cc436ea50d413f9434d5e6d"
              }}
              style={styles.ImageBackground_I24_1722_24_1684_23_1631}
            />
            <View style={styles.View_I24_1722_24_1684_23_1632}>
              <Text style={styles.Text_I24_1722_24_1684_23_1632}>
                Do you print miniatures in 3D? I want to print my characters!
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1684_23_1633}>
              <Text style={styles.Text_I24_1722_24_1684_23_1633}>
                Jenny Wilson
              </Text>
            </View>
            <View style={styles.View_I24_1722_24_1684_23_1634}>
              <Text style={styles.Text_I24_1722_24_1684_23_1634}>Shy</Text>
            </View>
            <View style={styles.View_I24_1722_24_1684_23_1635}>
              <Text style={styles.Text_I24_1722_24_1684_23_1635}>
                Yesterday
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05f/f09f/c1526de1b33173e982fc4f450c0f6ec4"
              }}
              style={styles.ImageBackground_I24_1722_24_1684_42_2830}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e756/20c1/34ba69959e1625d4f82b748abe965344"
          }}
          style={styles.ImageBackground_I24_1722_24_1685}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_21_1539: {
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
  View_I21_1539_17_223: {
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
  ImageBackground_I21_1539_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_1539_17_224: {
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
  ImageBackground_I21_1539_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_1539_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I21_1539_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I21_1539_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I21_1539_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_1539_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_1539_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I21_1539_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I21_1539_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I21_1539_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I21_1539_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I21_1539_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I21_1539_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I21_1539_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1577: {
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
  View_I22_1577_17_1228: {
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
  View_I22_1577_17_1228_17_1192: {
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
  View_I22_1577_17_1228_17_1193: {
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
  View_I22_1577_17_1228_17_1194: {
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
  View_I22_1577_17_1228_17_1195: {
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
  ImageBackground_I22_1577_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I22_1577_17_1228_17_1197: {
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
  View_I22_1577_17_1228_17_1198: {
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
  ImageBackground_I22_1577_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I22_1577_17_1228_17_1200: {
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
  View_I22_1577_17_1228_17_1201: {
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
  ImageBackground_I22_1577_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I22_1577_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_1577_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_1577_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I22_1577_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I22_1577_17_1228_17_1207: {
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
  ImageBackground_I22_1577_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_24_1722: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_36_1915: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1682: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1682_23_1629: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I24_1722_24_1682_23_1630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I24_1722_24_1682_23_1631: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I24_1722_24_1682_23_1632: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1682_23_1632: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1682_23_1633: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1682_23_1633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1682_23_1634: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1682_23_1634: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1682_23_1635: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1682_23_1635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_1722_24_1682_42_2830: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%")
  },
  View_I24_1722_24_1683: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1683_23_1629: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I24_1722_24_1683_23_1630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I24_1722_24_1683_23_1631: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I24_1722_24_1683_23_1632: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1683_23_1632: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1683_23_1633: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1683_23_1633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1683_23_1634: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1683_23_1634: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1683_23_1635: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1683_23_1635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_1722_24_1683_42_2830: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%")
  },
  View_I24_1722_24_1680: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1680_23_1629: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I24_1722_24_1680_23_1630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I24_1722_24_1680_23_1631: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I24_1722_24_1680_23_1632: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1680_23_1632: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1680_23_1633: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1680_23_1633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1680_23_1634: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1680_23_1634: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1680_23_1635: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1680_23_1635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_1722_24_1680_42_2830: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%")
  },
  View_I24_1722_24_1681: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1681_23_1629: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I24_1722_24_1681_23_1630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I24_1722_24_1681_23_1631: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I24_1722_24_1681_23_1632: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1681_23_1632: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1681_23_1633: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1681_23_1633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1681_23_1634: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1681_23_1634: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1681_23_1635: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1681_23_1635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_1722_24_1681_42_2830: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%")
  },
  View_I24_1722_24_1684: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1722_24_1684_23_1629: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I24_1722_24_1684_23_1630: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_I24_1722_24_1684_23_1631: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I24_1722_24_1684_23_1632: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1684_23_1632: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1684_23_1633: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1684_23_1633: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1684_23_1634: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1684_23_1634: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_1722_24_1684_23_1635: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I24_1722_24_1684_23_1635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_1722_24_1684_42_2830: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%")
  },
  ImageBackground_I24_1722_24_1685: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

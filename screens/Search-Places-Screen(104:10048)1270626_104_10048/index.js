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
      <View style={styles.View_17_898}>
        <View style={styles.View_I17_898_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I17_898_17_223_11_116}
          />
        </View>
        <View style={styles.View_I17_898_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I17_898_17_224_11_127}
          />
          <View style={styles.View_I17_898_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I17_898_17_224_11_129}
            />
            <View style={styles.View_I17_898_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I17_898_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I17_898_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I17_898_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I17_898_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I17_898_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I17_898_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I17_898_17_224_11_148}
            />
            <View style={styles.View_I17_898_17_224_11_155}>
              <View style={styles.View_I17_898_17_224_11_156}>
                <Text style={styles.Text_I17_898_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_18_1330}>
        <View style={styles.View_31_1481}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af69/2fc9/8585f52bc3e85ac7254f4357415b8b7b"
            }}
            style={styles.ImageBackground_I31_1481_31_1479}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b029/179a/b50cfaa53a4196f0e57ba15e44c6a389"
          }}
          style={styles.ImageBackground_18_1434}
        />
        <View style={styles.View_18_1415}>
          <View style={styles.View_I18_1415_18_1396}>
            <View style={styles.View_I18_1415_18_1396_18_1370} />
            <View style={styles.View_I18_1415_18_1396_18_1371}>
              <Text style={styles.Text_I18_1415_18_1396_18_1371}>
                100m from you
              </Text>
            </View>
            <View style={styles.View_I18_1415_18_1396_18_1372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85eb/1d61/5573a9fb6022a50a58857daf8a79ae14"
                }}
                style={styles.ImageBackground_I18_1415_18_1396_18_1373}
              />
              <View style={styles.View_I18_1415_18_1396_18_1374}>
                <Text style={styles.Text_I18_1415_18_1396_18_1374}>
                  Freak D20 Cavern
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I18_1415_18_1397}>
            <View style={styles.View_I18_1415_18_1397_18_1370} />
            <View style={styles.View_I18_1415_18_1397_18_1371}>
              <Text style={styles.Text_I18_1415_18_1397_18_1371}>
                2km from you
              </Text>
            </View>
            <View style={styles.View_I18_1415_18_1397_18_1372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbca/7bc8/28874ff3d348288f1969fd4ef30a24a7"
                }}
                style={styles.ImageBackground_I18_1415_18_1397_18_1373}
              />
              <View style={styles.View_I18_1415_18_1397_18_1374}>
                <Text style={styles.Text_I18_1415_18_1397_18_1374}>
                  Cosmic Horror Club
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I18_1415_18_1398}>
            <View style={styles.View_I18_1415_18_1398_18_1370} />
            <View style={styles.View_I18_1415_18_1398_18_1371}>
              <Text style={styles.Text_I18_1415_18_1398_18_1371}>
                800m from you
              </Text>
            </View>
            <View style={styles.View_I18_1415_18_1398_18_1372}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38c2/2560/2a57be21ce961d0a0356c92c7d1a929b"
                }}
                style={styles.ImageBackground_I18_1415_18_1398_18_1373}
              />
              <View style={styles.View_I18_1415_18_1398_18_1374}>
                <Text style={styles.Text_I18_1415_18_1398_18_1374}>
                  Warhammer Association
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bbd/2c27/263f326532b2f0a72817fca3bc66cfc9"
          }}
          style={styles.ImageBackground_18_1436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bbd/2c27/263f326532b2f0a72817fca3bc66cfc9"
          }}
          style={styles.ImageBackground_18_1438}
        />
      </View>
      <View style={styles.View_18_1121}>
        <View style={styles.View_I18_1121_17_1228}>
          <View style={styles.View_I18_1121_17_1228_17_1192} />
          <View style={styles.View_I18_1121_17_1228_17_1193}>
            <View style={styles.View_I18_1121_17_1228_17_1194}>
              <View style={styles.View_I18_1121_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I18_1121_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I18_1121_17_1228_17_1197}>
              <View style={styles.View_I18_1121_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I18_1121_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I18_1121_17_1228_17_1200}>
              <View style={styles.View_I18_1121_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I18_1121_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I18_1121_17_1228_17_1203}>
            <View style={styles.View_I18_1121_17_1228_17_1204}>
              <Text style={styles.Text_I18_1121_17_1228_17_1204}>
                Search Places
              </Text>
            </View>
          </View>
          <View style={styles.View_I18_1121_17_1228_17_1206}>
            <View style={styles.View_I18_1121_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I18_1121_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bbd/2c27/263f326532b2f0a72817fca3bc66cfc9"
        }}
        style={styles.ImageBackground_18_1440}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_17_898: {
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
  View_I17_898_17_223: {
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
  ImageBackground_I17_898_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_898_17_224: {
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
  ImageBackground_I17_898_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_898_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I17_898_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_898_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I17_898_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_898_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_898_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_898_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I17_898_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I17_898_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I17_898_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I17_898_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I17_898_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I17_898_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_1330: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_31_1481: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I31_1481_31_1479: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_18_1434: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_18_1415: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_1415_18_1396: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_1415_18_1396_18_1370: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(133, 211, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.25
  },
  View_I18_1415_18_1396_18_1371: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1396_18_1371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_1415_18_1396_18_1372: {
    flexGrow: 1,
    width: wp("35%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_1415_18_1396_18_1373: {
    width: wp("35%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I18_1415_18_1396_18_1374: {
    width: wp("33%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1396_18_1374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_1415_18_1397: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_1415_18_1397_18_1370: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.25
  },
  View_I18_1415_18_1397_18_1371: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1397_18_1371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_1415_18_1397_18_1372: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_1415_18_1397_18_1373: {
    width: wp("34%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I18_1415_18_1397_18_1374: {
    width: wp("32%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1397_18_1374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_1415_18_1398: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_1415_18_1398_18_1370: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.25
  },
  View_I18_1415_18_1398_18_1371: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1398_18_1371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_1415_18_1398_18_1372: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_1415_18_1398_18_1373: {
    width: wp("34%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I18_1415_18_1398_18_1374: {
    width: wp("32%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_I18_1415_18_1398_18_1374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_18_1436: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_18_1438: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_18_1121: {
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
  View_I18_1121_17_1228: {
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
  View_I18_1121_17_1228_17_1192: {
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
  View_I18_1121_17_1228_17_1193: {
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
  View_I18_1121_17_1228_17_1194: {
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
  View_I18_1121_17_1228_17_1195: {
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
  ImageBackground_I18_1121_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I18_1121_17_1228_17_1197: {
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
  View_I18_1121_17_1228_17_1198: {
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
  ImageBackground_I18_1121_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I18_1121_17_1228_17_1200: {
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
  View_I18_1121_17_1228_17_1201: {
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
  ImageBackground_I18_1121_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I18_1121_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_1121_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I18_1121_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I18_1121_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I18_1121_17_1228_17_1207: {
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
  ImageBackground_I18_1121_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_18_1440: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

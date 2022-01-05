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
      <View style={styles.View_17_982}>
        <View style={styles.View_I17_982_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I17_982_17_223_11_116}
          />
        </View>
        <View style={styles.View_I17_982_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I17_982_17_224_11_127}
          />
          <View style={styles.View_I17_982_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I17_982_17_224_11_129}
            />
            <View style={styles.View_I17_982_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I17_982_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I17_982_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I17_982_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I17_982_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I17_982_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I17_982_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I17_982_17_224_11_148}
            />
            <View style={styles.View_I17_982_17_224_11_155}>
              <View style={styles.View_I17_982_17_224_11_156}>
                <Text style={styles.Text_I17_982_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_17_983}>
        <View style={styles.View_I17_983_17_134}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d11/4e6b/11c3dc3383f8f18ca50cde91e3148ad1"
            }}
            style={styles.ImageBackground_I17_983_17_134_13_271}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ff/497f/e7abda74af8ec9e6833155961566f776"
            }}
            style={styles.ImageBackground_I17_983_17_134_13_272}
          />
          <View style={styles.View_I17_983_17_134_13_273}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I17_983_17_134_13_274}
            />
            <View style={styles.View_I17_983_17_134_13_275}>
              <View style={styles.View_I17_983_17_134_13_275_11_196} />
            </View>
            <View style={styles.View_I17_983_17_134_13_276}>
              <Text style={styles.Text_I17_983_17_134_13_276}>@frikiiii</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2543/a2e5/3e3664f6ab8bdc9946baff92a452eb44"
              }}
              style={styles.ImageBackground_I17_983_17_134_13_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0dc/ca14/b5cad8860ea37e561f8dec3c245a34d6"
              }}
              style={styles.ImageBackground_I17_983_17_134_13_280}
            />
            <View style={styles.View_I17_983_17_134_13_281}>
              <View style={styles.View_I17_983_17_134_13_281_11_198}>
                <Text style={styles.Text_I17_983_17_134_13_281_11_198}>
                  Frikiiii
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/298e/8e77/d53b8c47bad1455b9855fa9a6b061657"
              }}
              style={styles.ImageBackground_I17_983_17_134_11_408}
            />
          </View>
          <View style={styles.View_I17_983_17_134_13_282} />
          <View style={styles.View_I17_983_17_134_13_283}>
            <View style={styles.View_I17_983_17_134_13_284}>
              <View style={styles.View_I17_983_17_134_13_292}>
                <Text style={styles.Text_I17_983_17_134_13_292}>My Tables</Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_291}>
                <Text style={styles.Text_I17_983_17_134_13_291}>
                  Search Places
                </Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_290}>
                <Text style={styles.Text_I17_983_17_134_13_290}>
                  Search Table
                </Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_289}>
                <Text style={styles.Text_I17_983_17_134_13_289}>My Places</Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_285}>
                <Text style={styles.Text_I17_983_17_134_13_285}>
                  My Friends
                </Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_286}>
                <Text style={styles.Text_I17_983_17_134_13_286}>
                  Search Players
                </Text>
              </View>
              <View style={styles.View_I17_983_17_134_13_287}>
                <Text style={styles.Text_I17_983_17_134_13_287}>
                  My Profile
                </Text>
              </View>
            </View>
            <View style={styles.View_I17_983_17_134_15_150}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce16/ca1f/4c98fb325df6d94aeacaab93cd73f5cf"
                }}
                style={styles.ImageBackground_I17_983_17_134_15_145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccca/189c/fac830977518f8b2a98835a40f523a75"
                }}
                style={styles.ImageBackground_I17_983_17_134_13_340}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6df0/3832/77c12ebe2d7eeb84041548de0a6a542d"
                }}
                style={styles.ImageBackground_I17_983_17_134_15_148}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d333/a29c/fe7919919704d72b79c63198dd283b9f"
                }}
                style={styles.ImageBackground_I17_983_17_134_15_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/caee/590e/74c0c9c0c14d85d4dc945570523648f3"
                }}
                style={styles.ImageBackground_I17_983_17_134_15_134}
              />
              <View style={styles.View_I17_983_17_134_15_136}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7122/89ac/62ad9f08d7cacda3507700abf90b8524"
                  }}
                  style={styles.ImageBackground_I17_983_17_134_15_137}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fedd/b82a/45238ce109ec8786c9fad29eb6969340"
                }}
                style={styles.ImageBackground_I17_983_17_134_15_139}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_17_982: {
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
  View_I17_982_17_223: {
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
  ImageBackground_I17_982_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_982_17_224: {
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
  ImageBackground_I17_982_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_982_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I17_982_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_982_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I17_982_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_982_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_982_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_982_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I17_982_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I17_982_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I17_982_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I17_982_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I17_982_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I17_982_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_983: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_983_17_134: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I17_983_17_134_13_271: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I17_983_17_134_13_272: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_983_17_134_13_273: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.7200000286102295)",
    overflow: "hidden"
  },
  View_I17_983_17_134_13_274: {
    width: wp("81%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I17_983_17_134_13_275: {
    width: wp("81%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_983_17_134_13_275_11_196: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099
  },
  View_I17_983_17_134_13_276: {
    flexGrow: 1,
    width: wp("62%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_276: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_983_17_134_13_277: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("18%")
  },
  ImageBackground_I17_983_17_134_13_280: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  View_I17_983_17_134_13_281: {
    width: wp("44%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_983_17_134_13_281_11_198: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I17_983_17_134_13_281_11_198: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  ImageBackground_I17_983_17_134_11_408: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_I17_983_17_134_13_282: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("25%"),
    backgroundColor: "rgba(21, 84, 246, 1)"
  },
  View_I17_983_17_134_13_283: {
    flexGrow: 1,
    width: wp("73%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I17_983_17_134_13_284: {
    width: wp("25%"),
    height: hp("42%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_983_17_134_13_292: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_292: {
    color: "rgba(21, 84, 246, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_291: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_290: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_290: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_289: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_285: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_286: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_13_287: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_I17_983_17_134_13_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_983_17_134_15_150: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I17_983_17_134_15_145: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I17_983_17_134_13_340: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I17_983_17_134_15_148: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I17_983_17_134_15_132: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I17_983_17_134_15_134: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I17_983_17_134_15_136: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_983_17_134_15_137: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I17_983_17_134_15_139: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

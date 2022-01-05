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
      <View style={styles.View_47_1933}>
        <View style={styles.View_I47_1933_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I47_1933_17_223_11_116}
          />
        </View>
        <View style={styles.View_I47_1933_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I47_1933_17_224_11_127}
          />
          <View style={styles.View_I47_1933_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I47_1933_17_224_11_129}
            />
            <View style={styles.View_I47_1933_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I47_1933_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I47_1933_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I47_1933_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I47_1933_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I47_1933_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I47_1933_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I47_1933_17_224_11_148}
            />
            <View style={styles.View_I47_1933_17_224_11_155}>
              <View style={styles.View_I47_1933_17_224_11_156}>
                <Text style={styles.Text_I47_1933_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_47_1934}>
        <View style={styles.View_I47_1934_17_1228}>
          <View style={styles.View_I47_1934_17_1228_17_1192} />
          <View style={styles.View_I47_1934_17_1228_17_1193}>
            <View style={styles.View_I47_1934_17_1228_17_1194}>
              <View style={styles.View_I47_1934_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I47_1934_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I47_1934_17_1228_17_1197}>
              <View style={styles.View_I47_1934_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I47_1934_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I47_1934_17_1228_17_1200}>
              <View style={styles.View_I47_1934_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I47_1934_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I47_1934_17_1228_17_1203}>
            <View style={styles.View_I47_1934_17_1228_17_1204}>
              <Text style={styles.Text_I47_1934_17_1228_17_1204}>
                Search Physical Table
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_1934_17_1228_17_1206}>
            <View style={styles.View_I47_1934_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I47_1934_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_47_2302}>
        <View style={styles.View_47_2226}>
          <View style={styles.View_I47_2226_47_2153} />
          <View style={styles.View_I47_2226_47_2154}>
            <View style={styles.View_I47_2226_47_2155}>
              <View style={styles.View_I47_2226_47_2155_44_4562} />
              <View style={styles.View_I47_2226_47_2155_44_4563}>
                <Text style={styles.Text_I47_2226_47_2155_44_4563}>Other</Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2156}>
              <View style={styles.View_I47_2226_47_2156_44_4562} />
              <View style={styles.View_I47_2226_47_2156_44_4563}>
                <Text style={styles.Text_I47_2226_47_2156_44_4563}>
                  Monthly
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2157}>
              <View style={styles.View_I47_2226_47_2157_44_4562} />
              <View style={styles.View_I47_2226_47_2157_44_4563}>
                <Text style={styles.Text_I47_2226_47_2157_44_4563}>
                  Every two weeks
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2158}>
              <View style={styles.View_I47_2226_47_2158_44_4562} />
              <View style={styles.View_I47_2226_47_2158_44_4563}>
                <Text style={styles.Text_I47_2226_47_2158_44_4563}>Weekly</Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2159}>
              <View style={styles.View_I47_2226_47_2159_44_4562} />
              <View style={styles.View_I47_2226_47_2159_44_4563}>
                <Text style={styles.Text_I47_2226_47_2159_44_4563}>
                  One session
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2160}>
            <Text style={styles.Text_I47_2226_47_2160}>Frecuency</Text>
          </View>
          <View style={styles.View_I47_2226_47_2161}>
            <Text style={styles.Text_I47_2226_47_2161}>
              What table are you looking for...?
            </Text>
          </View>
          <View style={styles.View_I47_2226_47_2162}>
            <View style={styles.View_I47_2226_47_2162_44_4562} />
            <View style={styles.View_I47_2226_47_2162_44_4563}>
              <Text style={styles.Text_I47_2226_47_2162_44_4563}>
                Show recorded or streamed tables
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2163}>
            <View style={styles.View_I47_2226_47_2163_43_4467}>
              <Text style={styles.Text_I47_2226_47_2163_43_4467}>
                Coincidence with keywords...
              </Text>
            </View>
            <View style={styles.View_I47_2226_47_2163_43_4468} />
            <View style={styles.View_I47_2226_47_2163_44_4573}>
              <Text style={styles.Text_I47_2226_47_2163_44_4573}>
                Dragon, Adventure, King, ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2164}>
            <View style={styles.View_I47_2226_47_2164_46_1641}>
              <View style={styles.View_I47_2226_47_2164_46_1641_43_4467}>
                <Text style={styles.Text_I47_2226_47_2164_46_1641_43_4467}>
                  Language (choose one)
                </Text>
              </View>
              <View style={styles.View_I47_2226_47_2164_46_1641_43_4468} />
              <View style={styles.View_I47_2226_47_2164_46_1641_44_4573}>
                <Text style={styles.Text_I47_2226_47_2164_46_1641_44_4573}>
                  English
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93e8/fab6/da2529bd75bcc16f60a69613d41357d5"
              }}
              style={styles.ImageBackground_I47_2226_47_2164_46_1642}
            />
          </View>
          <View style={styles.View_I47_2226_47_2165}>
            <View style={styles.View_I47_2226_47_2165_43_4467}>
              <Text style={styles.Text_I47_2226_47_2165_43_4467}>
                Playing any of these games
              </Text>
            </View>
            <View style={styles.View_I47_2226_47_2165_43_4468} />
            <View style={styles.View_I47_2226_47_2165_44_4573}>
              <Text style={styles.Text_I47_2226_47_2165_44_4573}>
                DnD 5e, Pathfinder, Deadlands, ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2166}>
            <View style={styles.View_I47_2226_47_2166_44_4562} />
            <View style={styles.View_I47_2226_47_2166_44_4563}>
              <Text style={styles.Text_I47_2226_47_2166_44_4563}>
                Show tables with Adult Content (18+)
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2167}>
            <View style={styles.View_I47_2226_47_2167_44_4562} />
            <View style={styles.View_I47_2226_47_2167_44_4563}>
              <Text style={styles.Text_I47_2226_47_2167_44_4563}>
                Show only tables that accept new players
              </Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2168}>
            <View style={styles.View_I47_2226_47_2168_45_1621} />
            <View style={styles.View_I47_2226_47_2168_45_1622}>
              <Text style={styles.Text_I47_2226_47_2168_45_1622}>Button</Text>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2169}>
            <View style={styles.View_I47_2226_47_2169_43_4467}>
              <Text style={styles.Text_I47_2226_47_2169_43_4467}>Location</Text>
            </View>
            <View style={styles.View_I47_2226_47_2169_43_4468} />
            <View style={styles.View_I47_2226_47_2169_44_4573}>
              <Text style={styles.Text_I47_2226_47_2169_44_4573}>
                Madrid, Spain
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7b1/6628/87f470f0068b4088395a2123ab741ba6"
            }}
            style={styles.ImageBackground_I47_2226_47_2077}
          />
          <View style={styles.View_I47_2226_47_2170}>
            <View style={styles.View_I47_2226_47_2171}>
              <View style={styles.View_I47_2226_47_2171_44_4562} />
              <View style={styles.View_I47_2226_47_2171_44_4563}>
                <Text style={styles.Text_I47_2226_47_2171_44_4563}>Sunday</Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2172}>
              <View style={styles.View_I47_2226_47_2172_44_4562} />
              <View style={styles.View_I47_2226_47_2172_44_4563}>
                <Text style={styles.Text_I47_2226_47_2172_44_4563}>
                  Saturday
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2173}>
              <View style={styles.View_I47_2226_47_2173_44_4562} />
              <View style={styles.View_I47_2226_47_2173_44_4563}>
                <Text style={styles.Text_I47_2226_47_2173_44_4563}>Friday</Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2174}>
              <View style={styles.View_I47_2226_47_2174_44_4562} />
              <View style={styles.View_I47_2226_47_2174_44_4563}>
                <Text style={styles.Text_I47_2226_47_2174_44_4563}>
                  Thursday
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2175}>
              <View style={styles.View_I47_2226_47_2175_44_4562} />
              <View style={styles.View_I47_2226_47_2175_44_4563}>
                <Text style={styles.Text_I47_2226_47_2175_44_4563}>
                  Wednesday
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2176}>
              <View style={styles.View_I47_2226_47_2176_44_4562} />
              <View style={styles.View_I47_2226_47_2176_44_4563}>
                <Text style={styles.Text_I47_2226_47_2176_44_4563}>
                  Tuesday
                </Text>
              </View>
            </View>
            <View style={styles.View_I47_2226_47_2177}>
              <View style={styles.View_I47_2226_47_2177_44_4562} />
              <View style={styles.View_I47_2226_47_2177_44_4563}>
                <Text style={styles.Text_I47_2226_47_2177_44_4563}>Monday</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I47_2226_47_2178}>
            <Text style={styles.Text_I47_2226_47_2178}>
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
  View_47_1933: {
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
  View_I47_1933_17_223: {
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
  ImageBackground_I47_1933_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_1933_17_224: {
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
  ImageBackground_I47_1933_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_1933_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I47_1933_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_1933_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I47_1933_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_1933_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_1933_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I47_1933_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I47_1933_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I47_1933_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I47_1933_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I47_1933_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I47_1933_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_1933_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_1934: {
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
  View_I47_1934_17_1228: {
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
  View_I47_1934_17_1228_17_1192: {
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
  View_I47_1934_17_1228_17_1193: {
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
  View_I47_1934_17_1228_17_1194: {
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
  View_I47_1934_17_1228_17_1195: {
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
  ImageBackground_I47_1934_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I47_1934_17_1228_17_1197: {
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
  View_I47_1934_17_1228_17_1198: {
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
  ImageBackground_I47_1934_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I47_1934_17_1228_17_1200: {
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
  View_I47_1934_17_1228_17_1201: {
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
  ImageBackground_I47_1934_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I47_1934_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("52%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_1934_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_1934_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I47_1934_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I47_1934_17_1228_17_1207: {
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
  ImageBackground_I47_1934_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_47_2302: {
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
  View_47_2226: {
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
  View_I47_2226_47_2153: {
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
  View_I47_2226_47_2154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("90%")
  },
  View_I47_2226_47_2155: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2155_44_4562: {
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
  View_I47_2226_47_2155_44_4563: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2155_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2156: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2156_44_4562: {
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
  View_I47_2226_47_2156_44_4563: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2156_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2157: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2157_44_4562: {
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
  View_I47_2226_47_2157_44_4563: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2157_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2158: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2158_44_4562: {
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
  View_I47_2226_47_2158_44_4563: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2158_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2159: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2159_44_4562: {
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
  View_I47_2226_47_2159_44_4563: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2159_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2160: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2161: {
    flexGrow: 1,
    width: wp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2162: {
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
  View_I47_2226_47_2162_44_4562: {
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
  View_I47_2226_47_2162_44_4563: {
    flexGrow: 1,
    width: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2162_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2163: {
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
  View_I47_2226_47_2163_43_4467: {
    flexGrow: 1,
    width: wp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2163_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2163_43_4468: {
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
  View_I47_2226_47_2163_44_4573: {
    flexGrow: 1,
    width: wp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2163_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2164: {
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
  View_I47_2226_47_2164_46_1641: {
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
  View_I47_2226_47_2164_46_1641_43_4467: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2164_46_1641_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2164_46_1641_43_4468: {
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
  View_I47_2226_47_2164_46_1641_44_4573: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2164_46_1641_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I47_2226_47_2164_46_1642: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("6%")
  },
  View_I47_2226_47_2165: {
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
  View_I47_2226_47_2165_43_4467: {
    flexGrow: 1,
    width: wp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2165_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2165_43_4468: {
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
  View_I47_2226_47_2165_44_4573: {
    flexGrow: 1,
    width: wp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2165_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2166: {
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
  View_I47_2226_47_2166_44_4562: {
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
  View_I47_2226_47_2166_44_4563: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2166_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2167: {
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
  View_I47_2226_47_2167_44_4562: {
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
  View_I47_2226_47_2167_44_4563: {
    flexGrow: 1,
    width: wp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2167_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2168: {
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
  View_I47_2226_47_2168_45_1621: {
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
  View_I47_2226_47_2168_45_1622: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2168_45_1622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2169: {
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
  View_I47_2226_47_2169_43_4467: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2169_43_4467: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2169_43_4468: {
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
  View_I47_2226_47_2169_44_4573: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2169_44_4573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "100",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I47_2226_47_2077: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("54%")
  },
  View_I47_2226_47_2170: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("69%")
  },
  View_I47_2226_47_2171: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2171_44_4562: {
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
  View_I47_2226_47_2171_44_4563: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2171_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2172: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2172_44_4562: {
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
  View_I47_2226_47_2172_44_4563: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2172_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2173: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2173_44_4562: {
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
  View_I47_2226_47_2173_44_4563: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2173_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2174: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2174_44_4562: {
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
  View_I47_2226_47_2174_44_4563: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2174_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2175: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2175_44_4562: {
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
  View_I47_2226_47_2175_44_4563: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2175_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2176: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2176_44_4562: {
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
  View_I47_2226_47_2176_44_4563: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2176_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2177: {
    width: wp("38%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_2226_47_2177_44_4562: {
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
  View_I47_2226_47_2177_44_4563: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2177_44_4563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I47_2226_47_2178: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_I47_2226_47_2178: {
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

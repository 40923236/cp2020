var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '作業進度', 'text': 'Week\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 進度目標\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0完成進度\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \xa0W1\xa0 \xa0 \xa0 \xa0 \xa0 建立Github倉儲\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0已完成 \n \xa0W2\xa0 \xa0 \xa0 \xa0 \xa0 建立網頁\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 已完成 \n \xa0W3\xa0 \xa0 \xa0 \xa0 \xa0 與組員分配討論HW1內容\xa0 \xa0 \xa0 \xa0  已完成 \n \xa0W4\xa0 \xa0 \xa0 \xa0 \xa0 建立PC Hardware帳號\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 已完成 \n \xa0W5\xa0 \xa0 \xa0 \xa0 \xa0 將 PC Hardware PCH10\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 已完成 \n \xa0W6\xa0 \xa0 \xa0 \xa0 \xa0 \xa0,PCH11資料完成英翻中\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 放至個人網頁\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n \n \n 未來規劃 \n \xa0W7\xa0 \xa0 \xa0 \xa0 \xa0 \xa0完成作業心得 \n', 'tags': '', 'url': '作業進度.html'}, {'title': 'HW1', 'text': '作業1:個人分配範圍 \n PCH 10:Networking Hardware \n PCH 11: Networking Media \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'PCH10', 'text': 'PCH 10: 網路硬體(Networking Hardware) \n \n \n \n \n \n 網絡設備 \xa0\xa0 Network Devices \n \n ------------------------------------------------------------------------------------------------------- \n \n 總覽\xa0 Overview \n Network devices vary according to their purpose. In this module, we will discuss various devices, such as hubs, switches, routers, bridges, network adapters, and media. As we discuss the devices, you should pay attention to their uses, their benefits, and their limitations. We will also explore how to install a network adapter. \n 網絡設備根據其用途而有所不同。在本模塊中，我們將討論各種設備，例如集線器，交換機，路由器，網橋，網絡適配器和媒體。在討論設備時，您應注意其用途，優點和局限性。我們還將探討如何安裝網絡適配器。 \n ------------------------------------------------------------------------------------------------------- \n 集線器\xa0 Hub \n \n \n \n \n Hubs are among the most simplistic networking devices and are used to connect multiple network devices and workstations to each other, thereby forming a network. Hubs are also known as multiport repeaters. A hub works by accepting a signal in one port and rebroadcasting that same signal out to all of its other ports. Standard hubs do not have any “intelligence” (ability to change in response to varying situations or requirements), so we often refer to them as “dumb hubs.” Hubs can be classified as either active or passive. An active hub repeats the signal it receives on all of its ports and amplifies that signal to full strength. Passive hubs only repeat the signal without adding any amplification. Hubs are an older technology that can be used to easily increase the number of ports available, but this can lead to excessive network errors and collisions. There are newer variants of hubs called smart hubs. Smart hubs are essentially active hubs with enhanced feature sets, such as the use of simple network management protocol (SNMP). \n Three basic types of Ethernet hubs are as follows: \n \n Passive hub – repeats signal with no amplification \n Active hub – repeats signal with amplification \n Smart hub – active hub with enhanced features (ex: SNMP) \n \n Hubs have no inherent security designed within them because they simply rebroadcast all the information received from one port to every other port. Essentially, hubs rely on the connected workstations to only “listen” to the information on their port if that information is specifically addressed to that workstation. When the information is not addressed to it, the workstation is supposed to simply ignore the data. But a network card can be placed into “promiscuous” mode, where it will listen to all traffic, regardless of which workstation that traffic is addressed to. This makes hubs very insecure. \n Another drawback of hubs is that they have to share bandwidth, as all devices operate in one collision domain. Therefore, if you have a 100 Mbps hub, but connect four devices to that hub, your devices will effectively be operating at 25 Mbps each. This can lead to huge slowdowns in your network traffic when using a 16-, 24-, or 48-port hub. \n 集線器是最簡單的網絡設備之一，用於將多個網絡設備和工作站相互連接，從而形成一個網絡。 集線器也稱為多端口中繼器。 集線器通過在一個端口中接收信號並將該信號重新廣播到其所有其他端口來工作。 標準集線器沒有任何“智能”（能夠根據不同情況或要求進行更改的能力），因此我們通常將它們稱為“啞集線器”。 集線器可以分為主動或被動兩種。 活動集線器會在其所有端口上重複接收到的信號，並將該信號放大到最大強度。 無源集線器僅重複信號而不增加任何放大。 集線器是一種較舊的技術，可用於輕鬆增加可用端口的數量， 但這會導致過多的網絡錯誤和衝突。 集線器有較新的變體，稱為智能集線器。 智能集線器實質上是具有增強功能集（例如，使用簡單網絡管理協議（SNMP））的活動集線器。 \n 以太網集線器的三種基本類型如下： \n \n 無源集線器–重複信號而不放大 \n 有源集線器–重複放大信號 \n 智能集線器–具有增強功能的活動集線器（例如：SNMP） \n \n 集線器內部沒有設計固有的安全性，因為它們只是將從一個端口接收的所有信息重新廣播到另一個端口。 本質上，集線器僅依賴於連接的工作站來“偵聽”其端口上的信息（如果該信息專門針對該工作站）。 當信息沒有發送給它時，工作站應該只是忽略數據。 但是，可以將網卡置於“混雜”模式，在該模式下，網卡將偵聽所有流量，而不管該流量指向哪個工作站。 這使集線器非常不安全。 \n 集線器的另一個缺點是它們必須共享帶寬，因為所有設備都在一個衝突域中運行。 因此，如果您有一個100 Mbps的集線器，但將四個設備連接到該集線器，則每個設備將有效地以25 Mbps的速度運行。 使用16端口，24端口或48端口集線器時，這可能會導致網絡流量大幅下降。 \n ------------------------------------------------------------------------------------------------------- \n 網橋\xa0 Bridges \n Because hubs operate with all devices acting in a single collision domain, a network device that could break up that collision domain into smaller units is required to help the network operate more efficiently. For example, if a hub is connected to another hub, they both operate under a single\xa0 collision domain \xa0 . A bridge is used to connect two hubs together, but still keep the hubs’ collision domains separate. This interconnection of multiple network segments together allows networks to scale into large networks without significantly decreasing the performance of that network. Bridges are smarter than hubs; in fact, they actually analyze the source \xa0 media access control (MAC) addresses \xa0 in the frames entering the bridge and populate an internal MAC table based on those addresses. Future routing decisions are based upon those destination MAC addresses. This intelligent forwarding based on the destination MAC address in the frame allows for a decrease in network traffic by only forwarding information to the root hub associated with the network device. Network switches, which we will discuss, are the evolution of hubs and bridges. \n \n \n \n \n 因為集線器與所有在單個衝突域中起作用的設備一起運行，所以需要一個可以將該衝突域分解為較小單元的網絡設備，以幫助網絡更高效地運行。 例如，如果一個集線器連接到另一個集線器，則它們都在單個 衝突域 下運行 \xa0 。 橋用於將兩個集線器連接在一起，但仍將集線器的衝突域分開。 多個網段的這種互連在一起使網絡可以擴展為大型網絡，而不會顯著降低該網絡的性能。 橋比集線器更智能； 實際上，他們實際上是在分析源 \xa0 媒體訪問控制（MAC）地址 在進入網橋的幀中，並根據這些地址填充內部MAC表。 未來的路由決策將基於那些目標MAC地址。 通過僅將信息轉發到與網絡設備關聯的根集線器，這種基於幀中目標MAC地址的智能轉發可減少網絡流量。 我們將討論的網絡交換機是集線器和網橋的演進。 \n ------------------------------------------------------------------------------------------------------- \n 交換機\xa0 Switches \n Switches are used to connect multiple network segments together, whether they connect from switch to switch, or switch to workstation. Each port on a switch acts as its own collision domain. A switch is an evolution from a hub and bridge. Essentially, each port on a switch operates as if it were a hub with a bridge connecting the ports of the hub to the workstation, thereby reducing the chance of a collision on the network to zero. \n Switches are intelligent devices that make forwarding decisions based upon the MAC addresses they learn and place in their MAC tables. A switch analyzes the source MAC addresses in frames as they enter the switch, and then populates the switch’s internal MAC table with the addresses to match them with the switch ports. This allows the switch to forward the frame only to the correct device on a single switch port, thereby increasing security and network speed. \n If a switch receives a frame but does not have the destination MAC address in its forwarding table, it will flood the frame to all ports except the source to solicit the location of the destination MAC address. Switches break up collision domains but create \xa0 broadcast domains \xa0 . \n Security is increased because only the device to which the information is addressed can receive a copy, regardless of whether the card is in “promiscuous” mode. This is similar in operation to an old-fashioned telephone operator switchboard. If the information isn’t addressed to your port, your port won’t receive the information. Also, because each port is in its own collision domain, the network speed is increased. Regardless of how many devices are on the network, each switch port has full-speed operations, so for a 100 Mbps switch, each device operates at 100 Mbps. \n \n \n \n \n 交換機用於將多個網段連接在一起，無論它們是從交換機到交換機還是從工作站到工作站。 交換機上的每個端口都充當其自己的衝突域。 交換機是集線器和網橋的演進。 本質上，交換機上的每個端口都好像是集線器一樣工作，並具有將集線器的端口連接到工作站的網橋，從而將網絡衝突的可能性降低到零。 \n 交換機是智能設備，它們根據其學習到的MAC地址並放置在其MAC表中來做出轉發決策。 交換機在輸入源MAC地址時會對其進行分析，然後以幀的形式填充源IP地址，以使其與交換機端口匹配。 這允許交換機僅將幀轉發到單個交換機端口上的正確設備，從而提高安全性和網絡速度。 \n 如果交換機接收到幀，但在其轉發表中沒有目標MAC地址，則它將將該幀泛洪到除源之外的所有端口上，以請求目標MAC地址的位置。 交換器分解衝突域，但創建 \xa0 廣播域 。 \n 安全性提高了，因為無論信息卡是否處於“混雜”模式，只有信息所針對的設備才能收到副本。 這在操作上類似於老式的電話接線員總機。 如果該信息未發送到您的端口，則您的端口將不會收到該信息。 另外，由於每個端口都在其自己的衝突域中，因此網絡速度得以提高。 無論網絡上有多少設備，每個交換機端口都可以全速運行，因此對於100 Mbps交換機，每個設備都以100 Mbps的速度運行。 \n \n 與交換機的網絡圖。 \n ------------------------------------------------------------------------------------------------------- \n 路由器\xa0 Routers \n Routers move data packets (layer 3), as opposed to switches (layer 2), which move frames. Routers separate network segments based on IP addressing and will only forward packets out of the segment when configured to do so. This design breaks up broadcast domains created by switches. It is up to the network professional to configure the router to connect different networks together and perform intelligent routing decisions. A router is most closely associated with a computer in that it has a processor and a sophisticated OS. The router compares the IP address of the source and destination of the packet and forwards traffic to/from a network based on this logical address (IPv4 and IPv6 addresses, for example). Routers are typically feature-rich devices and support a wide range of interface types, including unshielded twisted pair, fiber optic, and coaxial cable connections. Like a switch, each port on a router is a separate collision domain. Using access control lists, routers have the ability to block access to networks based on ports or addresses. This blocking adds to the network’s security. \n \n \n \n \n 路由器移動數據包（第3層），而交換機移動第2層（幀）。 路由器根據IP地址將網段分開，並且僅在配置\xa0 時將數據包轉發出網段。 這種設計可以分解由交換機創建的廣播域。 由網絡專業人員決定將路由器配置為將不同的網絡連接在一起並執行智能路由決策。 路由器與計算機的關係最為密切，因為它具有處理器和完善的操作系統。 路由器比較數據包源和目標的IP地址，並基於此邏輯地址（例如，IPv4和IPv6地址）將流量轉發到網絡或從網絡轉發流量。 路由器通常是功能豐富的設備，並且支持多種接口類型， 包括非屏蔽雙絞線，光纖和同軸電纜連接。 像交換機一樣，路由器上的每個端口都是一個單獨的衝突域。 使用訪問控制列表，路由器可以根據端口或地址阻止對網絡的訪問。 這種阻塞增加了網絡的安全性。 \n \n 與路由器的網絡圖。 \n ------------------------------------------------------------------------------------------------------- \n 網路適配器\xa0 N etwork Adapter \n \n \n The network adapter is used to connect a workstation to the network through the use of media. The network adapter can be built in to the motherboard of the device in several ways: \n \n Using an integrated port cluster. \n Added to a workstation through the use of an internal expansion card (PCIe, PCI, or mini-PCIe). \n Through the use of an externally connected card, such as USB or PCMCIA. \n \n There are two main types of network adapters: wired and wireless. The wired cards support various cable types, such as unshielded twisted pair (UTP), fiber optic, and coaxial cabling. These various cable types are called media. \n \n \n \n \n \n \n 網絡適配器用於通過使用媒體將工作站連接到網絡。 可以通過幾種方式將網絡適配器內置到設備的主板中： \n \n 使用集成端口集群。 \n 通過使用內部擴展卡（PCIe，PCI或mini-PCIe）添加到工作站。 \n 通過使用外部連接的卡，例如USB或PCMCIA。 \n \n 網絡適配器有兩種主要類型：有線和無線。 有線卡支持各種電纜類型，例如非屏蔽雙絞線（UTP），光纖和同軸電纜。 這些各種電纜類型稱為媒體。 \n ------------------------------------------------------------------------------------------------------- \n 媒體\xa0\xa0Media \n Media is the term used to categorize the physical connection between two device ports, such as between a computer and a switch. Media is made up of copper cable, fiber-optic cable, or even radio frequency waves (as used in Wi-Fi networks). Media varies greatly in cost, from free for radio waves, to cheap for unshielded twisted pair (copper cable), to expensive for fiber-optic cabling. The type of media determines the bandwidth speed, capacity, and distance limitations for a particular network. We will discuss media in more depth in a future module. \n \n \n \n \n 媒體是用於對兩個設備端口之間（例如計算機和交換機之間）的物理連接進行分類的術語。 介質由銅纜，光纜或什至是射頻波（用於Wi-Fi網絡）組成。 介質的成本差異很大，從無線電波的免費成本到非屏蔽雙絞線（銅纜）的價格便宜，再到光纖電纜的價格昂貴。 媒體的類型確定特定網絡的帶寬速度，容量和距離限制。 我們將在以後的模塊中更深入地討論媒體。 \n \n 與指向連接媒體的箭頭的網絡圖。 \n \n \n ------------------------------------------------------------------------------------------------------- \n 安裝網絡適配器 \xa0\xa0 Install a Network Adapter \n There are times when you may need to install an add-on network interface card (NIC). Current desktop motherboards should have a built-in NIC on the rear input/output (I/O) panel. Installing an add-on card can keep a machine in service if the built-in NIC is defective or if you need to upgrade to match the current local area network (LAN) specifications (i.e., from a 10/100 BaseT to 10/100/1000 or 10GBaseT).\xa0\xa0 \n 有時您可能需要安裝附加網絡接口卡（NIC）。 當前的台式機主板的後方輸入/輸出（I / O）面板上應具有內置的NIC。 如果內置NIC出現故障，或者需要升級以匹配當前的局域網（LAN）規格（即從10/100  BaseT 到10/100），則安裝附加卡可以使機器保持運行狀態。 / 1000或10G BaseT ）。 \n \n What does BaseT mean? \n BaseT是什麼意思? \n In 100 Mbps (megabits per second) Ethernet (known as \xa0fast Ethernet ), there are three types of physical wiring that can carry signals: \n \n 100BASE-T4 (four pairs of telephone twisted-pair wire) \n 100BASE-TX (two pairs of data-grade twisted-pair wire) \n 100BASE-FX (a two-strand optical fiber cable) \n \n The designation of BASE-T (or similar) is given by the Institute of Electrical and Electronics Engineers (IEEE). The "100" designates the media type and refers to 100 Mbps transmission speed. The word base references baseband signalling. This means only Ethernet signals are carried on the cable. T4, TX, and FX designates the physical medium that carries the digital signal. \n The TX and FX types are sometimes displayed as 100BASE-X. 100BASE-T and 100BaseT are equivalent designations. \n 在100 Mbps（兆位/秒）的以太網（稱為快速以太網 ）中，有三種類型的物理線路可以承載信號： \n \n 100BASE-T4（四對電話雙絞線） \n 100BASE-TX（兩對數據級雙絞線） \n 100BASE-FX（兩股光纜） \n \n 電氣電子工程師學會（IEEE）給出了BASE-T（或類似名稱）的名稱。 “ 100”表示媒體類型，表示100 Mbps的傳輸速度。 基詞一詞指基帶信令。 這意味著電纜上僅承載以太網信號。 T4，TX和FX表示承載數字信號的物理介質。 \n TX和FX類型有時顯示為100BASE-X。 100BASE-T和100BaseT是等效的名稱。 \n \n To install an NIC, follow these steps: \n \n Check documentation to verify which NIC will match your expansion slots (PCI or PCIe) and the LAN requirements. Ensure that the adapter will work with the motherboard. \n Power down the computer and disconnect the main power cord from the machine. \n Following safe repair practice (proper grounding/anti-static strap), open the side cover of the computer to inspect available expansion slots. \n Match the connector/pinouts of the new NIC card and verify it matches the proposed slot. \n Remove the corresponding computer PCI option slot cover from the back panel. \n Line up the connector of the NIC to the expansion slot and seat it firmly as you guide the bracket up to the back panel of the computer, ensuring proper alignment. Tighten the new NIC with the screw that is usually supplied. \n Close the side cover of the computer following safe repair procedures. \n Reconnect the main power cord. \n Power up the machine. \n \n After the NIC hardware is installed, the drivers should install automatically, depending on the operating system. For Windows (Vista/Win7/Win8.1/Win10), verify connectivity in the network and sharing center. For Linux, go to network settings, and search online for the appropriate driver depending on the \xa0 Linux distribution \xa0 , such as Red Hat Linux or Ubuntu). \n \n \n 要安裝NIC，請按照下列步驟操作： \n \n 查看文檔，以確認哪個NIC將與您的擴展插槽（PCI或PCIe）和LAN要求相匹配。 確保適配器可與主板配合使用。 \n 關閉計算機電源，然後從計算機上斷開主電源線。 \n 按照安全維修慣例（正確的接地/防靜電皮帶），打開計算機的側蓋，檢查可用的擴展槽。 \n 匹配新NIC卡的連接器/引腳，並驗證它是否與建議的插槽匹配。 \n 從背面板上卸下相應的計算機PCI選件插槽蓋。 \n 將NIC的連接器對準擴展插槽，並在將支架向上推至計算機的背面板上時將其牢固就位，以確保正確對齊。 用通常提供的螺釘擰緊新的NIC。 \n 請按照安全維修步驟關閉計算機的側蓋。 \n 重新連接主電源線。 \n 打開機器電源。 \n \n 安裝NIC硬件後，驅動程序應根據操作系統自動安裝。 對於Windows（Vista / Win7 / Win8.1 / Win10），請驗證網絡和共享中心中的連接。 對於Linux，請轉到網絡設置，然後根據 Linux發行版 （例如Red Hat Linux或Ubuntu） 在線搜索適當的驅動程序 \xa0 。 \n \n 帶有同軸端口的NIC。 \n \n 英特爾82574L千兆位以太網NIC PCI Express x1卡。 \n \n In the lab below, you should install a new network interface card (NIC). In doing so, be sure that the card has the right pinout. Also, be sure to use proper ESD precautions. \n 在下面的實驗室中，您應該安裝新的網絡接口卡（NIC）。 這樣做時，請確保卡具有正確的引腳排列。 另外，請確保使用適當的ESD預防措施。', 'tags': '', 'url': 'PCH10.html'}, {'title': 'PCH11', 'text': 'PCH11:網路媒體(Networking Media) \n \n 光纖電纜\xa0 \xa0 Fiber-Optic Cable \n 總覽\xa0 Overview \n In this module, we’re going to discuss the various types of network media. We will begin with fiber-optic cable and then discuss twisted pair cable and coaxial cable. For each of these cable types, we will discuss appearance, characteristics, and types of connectors, as well as speed and limitations. \n 在本模塊中，我們將討論各種類型的網絡媒體。 我們將從光纖電纜開始，然後討論雙絞線電纜和同軸電纜。 對於每種電纜類型，我們將討論連接器的外觀，特性和類型，以及速度和限制。 \n ------------------------------------------------------------------------------------------------------- \n 光纖電纜\xa0 Fiber-Optic Cable \n Fiber-optic cables are constructed by using a glass core at the center of the cable that is surrounded by cladding. In order to send data from one end of the cable to the other, light from a light-emitting diode (LED) or laser is used to transmit the signal down the glass fiber at the center of the cable. Because the data is being transmitted using light, it is immune to the effects of electromagnetic interference (EMI) that impact traditional copper-based cables, such as twisted pair and coaxial cables. Fiber-optic cables possess the ability to send the data a very far distance (many miles) without the use of a repeater. They also can carry a significant amount of data due to their large bandwidth and the information traveling at light speed. Their bandwidth can be measured in gigabits or even terabits per second. There are two types of fiber cables: multimode and single-mode fiber. \n 光纖電纜是通過在電纜的中心使用玻璃芯構成的，該芯層被包層圍繞。 為了將數據從電纜的一端發送到另一端，可使用來自發光二極管（LED）或激光的光沿電纜中心的玻璃纖維向下傳輸信號。 由於數據是通過光傳輸的，因此不受電磁干擾（EMI）的影響，電磁干擾會影響傳統的銅基電纜，如雙絞線和同軸電纜。 光纖具有無需使用中繼器就可以很遠的距離（許多英里）發送數據的能力。 由於它們的大帶寬和以光速傳播的信息，它們還可以攜帶大量數據。 它們的帶寬可以每秒千兆比特或什至兆兆比特來度量。 \n \n \n 光纖電纜。 \n Multimode fiber cables (MMF) contain a larger core than the single-mode variety. The core size for a multimode fiber is 62.5 microns. A micron is a very small unit of measurement—it is actually even smaller than the width of a human hair. MMF’s larger core enables multiple modes of travel for the light from one end of the cable to the other. This allows a single fiber to carry multiple signals across it, with each signal being transmitted at a slightly different reflective angle. When the light reaches the destination, the signals are then converted back into 1s and 0s and passed to the computer by the network interface card. Multimode fiber is commonly used in shorter distance fiber connections, such as from a router to a switch, a switch to a switch, or a server to a switch. \n Single-mode fiber cables (SMF) contain a much smaller core than the multimode variety. The core size for SMF is 10 microns. SMF’s smaller core only allows for a single mode of travel for the light from one end of the cable to the other. This straight-through connection allows for data to travel longer distances without a repeater than it can travel using MMF. When the light reaches the destination, the signals are then converted back into 1s and 0s and passed to the computer by the network interface card. Single mode fiber is commonly used in very long distance fiber connections, such as a backbone connection from one local area network to another. \n 多模光纜（MMF）的芯線比單模光纜大。多模光纖的纖芯尺寸為62.5微米。微米是非常小的度量單位，實際上甚至比人類頭髮的寬度還小。MMF的較大芯線實現了從電纜一端到另一端的多種傳播模式。這樣一來，單根光纖就可以在其上傳輸多個信號，而每個信號的反射角度都會稍有不同。當光線到達目的地時，信號然後被轉換回1s和0s，並通過網絡接口卡傳遞到計算機。多模光纖通常用於較短距離的光纖連接中，例如從路由器到交換機，從交換機到交換機或從服務器到交換機。 \n 單模光纜（SMF）的芯線比多模光纜小得多。 SMF的芯尺寸為10微米。 SMF的較小芯線僅允許光從電纜一端到另一端的單一傳播模式。 這種直通連接允許數據在沒有中繼器的情況下傳輸的距離比使用MMF傳輸的距離更長。 當光線到達目的地時，信號然後被轉換回1s和0s，並通過網絡接口卡傳遞到計算機。 單模光纖通常用於超長距離的光纖連接中，例如從一個區域網到另一個區域網的骨幹連接。 \n ------------------------------------------------------------------------------------------------------- \n 光纖電纜 連接器\xa0\xa0 Fiber-Optic Cable Connectors \n Fiber cables only come in the two types discussed above: single-mode and multimode. However, the ends of each of these cables come in four varieties. \n The subscriber connector (SC) is a fiber-optic cable connector that uses a push-pull mechanism to latch into the port, similar to common audio and video cables. If you want to enable bidirectional transmission for sending and receiving data, you need to have two fiber cables, so sometimes a dual SC connector is used. \n The straight tip (ST) connector is a fiber-optic cable connector that uses a bayonet plug and socket. It was the first de facto standard connector for most commercial wiring using fiber cables and it is very commonly found in fiber networks. \n The Lucent connector (LC) is a miniaturized version of the fiber-optic SC connector. It looks somewhat like the SC, but is half the size, with a 1.25 mm ferrule instead of 2.5 mm, making it very useful when connecting multiple devices in a small area, such as on a 24-port switch’s front panel. \n The mechanical transfer-registered jack (MT-RJ) connector is a fiber-optic cable connector that is very popular for small-form-factor devices due to its small size. This connector houses two fibers and mates with locating pins on the plug. These connectors are commonly found connecting a switch to a patch panel, because both devices have a limited area on their front panels. \n 光纖電纜僅屬於上述兩種類型：單模和多模。但是，每條電纜的末端都有四種。 \n 用戶連接器（SC）是一種光纖電纜連接器，與普通的音頻和視頻電纜類似，它使用推挽機制鎖入端口。 如果要啟用雙向傳輸以發送和接收數據，則需要使用兩根光纖電纜，因此有時會使用雙SC連接器。 \n 筆直（ST）連接器是使用卡口插頭和插座的光纖電纜連接器。 它是大多數使用光纖電纜進行商業佈線的第一個事實上的標準連接器，並且在光纖網絡中非常常見。 \n 朗訊連接器（LC）是光纖SC連接器的微型版本。 它看上去有點像SC，但尺寸只有一半，只有1.25毫米而不是2.5毫米的插芯，因此在小區域（例如24端口交換機的前面板）連接多個設備時非常有用。 \n 機械傳輸註冊插孔（MT-RJ）連接器是一種光纖電纜連接器，由於其尺寸小，在小型設備中非常受歡迎。 該連接器容納兩根光纖，並與插頭上的定位銷配對。 通常發現這些連接器將開關連接到配線架，因為兩個設備的前面板都有有限的區域。 \n \n \n ------------------------------------------------------------------------------------------------------- \n 雙絞線 \xa0\xa0 Twisted Pair Cable \n While fiber-optic cable is great for its speed, distance, and security, it hasn’t yet become commonplace in most networks. Instead, we are still using the same type of cabling we have been using for the past two to three decades — twisted pair. Twisted pair cable is the most popular physical LAN media in the world today. Each cable contains four pairs of individually insulated strands of copper wire. Each pair is twisted together to minimize the amount of electromagnetic interference (EMI). The more twists there are in the cable, the less EMI there will be. Twisted pair cable is broken up into two types: unshielded twisted pair (UTP) and shielded twisted pair (STP). \n 儘管光纜在速度，距離和安全性方面都非常出色，但在大多數網絡中尚未普及。 相反，我們仍在使用過去兩到三十年來一直使用的相同類型的電纜-雙絞線。 雙絞線電纜是當今世界上最流行的物理LAN介質。 每條電纜包含四對獨立絕緣的銅線。 每對絞合在一起以最大程度地減少電磁干擾（EMI）。 電纜中的扭曲越多，EMI越小。 雙絞線分為兩種類型：非屏蔽雙絞線（UTP）和屏蔽雙絞線（STP）。 \n \n 光纖連接器。 \n Shielded twisted pair cable is built very similarly to unshielded twisted pair, except that the pairs of wires are also surrounded by a metallic shielding (like foil). This outer foil shielding minimizes the EMI to which the cable is exposed. This increases the security and reliability of the cable. Unfortunately, however, this also increases the cost of the cable, so it is typically used only in high-production environments where the extra security is worth the extra cost. \n The more common type of cabling is unshielded twisted pair cable. Instead of using extra shielding, this cable relies on the twisting of its copper pairs to minimize the effects of EMI. Each twisted pair is twisted to insulate itself from the other pairs, and because there is no additional shielding, it is available at a lower cost than STP. Therefore, UTP is the most common media of choice for small office, home office, residential, and many commercial networks. \n 屏蔽雙絞線電纜的構造與非屏蔽雙絞線非常相似，不同的是，成對的電線也被金屬屏蔽層（如金屬箔）圍繞。外部箔屏蔽層可最大程度地減小電纜所遭受的EMI。這增加了電纜的安全性和可靠性。但是，不幸的是，這也增加了電纜的成本，因此通常僅在高生產環境中使用，在這種環境中，額外的安全性值得額外的成本。 \n 電纜的最常見類型是非屏蔽雙絞線電纜。 該電纜不使用額外的屏蔽，而是依靠其銅線對的絞合來最大程度地減小EMI的影響。 每個雙絞線都經過絞合，以使其自身與其他雙絞線絕緣，並且由於沒有額外的屏蔽，因此可以以比STP更低的成本獲得。 因此，UTP是小型辦公室，家庭辦公室，住宅和許多商業網絡中最常見的選擇媒體。 \n \n 無護套的雙絞線電纜。 \n ------------------------------------------------------------------------------------------------------- \n 分類雙絞線電纜\xa0 Categorizing Twisted Pair Cable \n Twisted pair cable is categorized based on a category (cat) number. For example, cat 3, or category 3, is the oldest type of cable that we use. It was introduced back in the 1980s and 1990s for use in the first star topologies. The maximum throughput or bandwidth of cat 3 cabling is only 10 Mbps (megabits per second). The cat 3, like all twisted pair cabling, cannot go farther than 100 meters without using a repeater, switch, or active hub to amplify the signal. This limited distance is attributable to the copper wiring in these cables. As the signal travels over the copper wire, the natural resistance to the wire decreases the signal’s strength, and it eventually becomes too weak for the distant end to receive. For this reason, there is a 100 meter limitation when building and designing a twisted pair network. \n Cat 5 cables were an improvement on the older cat 3 cables and contain more twists, giving them more shielding from EMI and a maximum bandwidth of 100 Mbps. Cat 5e, or cat 5 enhanced, increased the speed of the maximum throughput to one Gbps, or 1000 Mbps, and became a gap filler until cat 6 cabling became commonplace. \n Cat 6a overcomes the 37-55 meter limitation of cat 6 when used in 10GBaseT. Cat 7, the newest standard, is shielded and provides connections up to 10 Gbps with a maximum distance of 100 meters. “Cat 7 and cat 7a cabling will be used for backbone connections between servers within a data center” and “provide an alternative to using fiber-optic cabling within the data center” (from http://www.cablestogo.com/learning/library/data-center/cat7-overview ). \n All cable categories up to cat 5e and cat 6a have a maximum distance of 100 meters. When used in 10GBaseT, the maximum distance for cat 6 is 55 meters. Cat 7 is shielded and exceeds the 100 meter limit. As the category of the cable increases, so do the number of twists per inch and the frequency range, allowing for more data and improved protection against EMI. Best practice for copper cabling is \xa0 not \xa0 to run cable lengths to the maximum because attenuation will reduce data capacity. \n \n \n 雙絞線電纜根據類別（類別）編號進行分類。例如，類別3（或類別3）是我們使用的最古老的電纜類型。它是在1980年代和1990年代引入的，用於第一批星形拓撲。Cat 3電纜的最大吞吐量或帶寬僅為10 Mbps（兆位/秒）。與所有雙絞線電纜一樣，如果不使用中繼器，交換機或有源集線器來放大信號，則Cat 3不能走超過100米。這種有限的距離歸因於這些電纜中的銅線。當信號在銅線上傳輸時，導線的固有電阻會降低信號的強度，並且最終變得太弱而無法接收遠端。為此原因， \n Cat 5電纜是對較舊的Cat 3電纜的改進，並包含更多的絞合線，從而使它們具有更大的EMI屏蔽能力，最大帶寬為100 Mbps。Cat 5e或Cat 5增強了，將最大吞吐量的速度提高到1 Gbps或1000 Mbps，並成為了空白，直到Cat 6電纜變得司空見慣。 \n 當在10GBaseT中使用時，Cat 6a克服了Cat 6的37-55米的限制。最新標準Cat 7被屏蔽，並提供高達10 Gbps的連接，最大距離為100米。“ Cat 7和Cat 7a電纜將用於數據中心內服務器之間的主干連接”，並且“提供在數據中心內使用光纖電纜的替代方法”（來自 \xa0 http://www.cablestogo.com/learning/庫/數據中心/ cat7-overview ）。 \n 直至Cat 5e和Cat 6a為止的所有電纜類別的最大距離為100米。在10GBaseT中使用時，類別6的最大距離為55米。Cat 7被屏蔽並超過100米的限制。隨著電纜類別的增加，每英寸的捻數和頻率範圍也會增加，從而可以提供更多的數據並改善對EMI的保護。銅纜佈線的最佳實踐是 不要 使電纜長度最大，因為衰減會降低數據容量。 \n \n \n \n Category \n Maximum Throughput \n LAN Application \n \n \n Cat 3 \n 10Mbps \n 10BaseT; 100BaseT4deprecated \n \n \n Cat 5 \n 100Mbps \n 10/100/1000BaseT100/1000BaseTX \n \n \n Cat 5e \n 1Gbps (1000Mbps) \n 10/100/1000BaseT100/1000BaseTX \n \n \n Cat 6 \n 1Gbps (1000Mbps) \n 10/100/1000BaseT100/1000BaseTX10GBaseT \n \n \n Cat 6a \n 10Gbps \n 10/100/1000BaseT100/1000/BaseTX10GBaseT \n \n \n Cat 7 \n 10Gbps \n 10/100/1000BaseT100/1000/BaseTX10GBaseT \n \n \n \n \n \n \n \n 類別 \n 最大吞吐量 \n 局域網應用 \n \n \n Cat 3 \n 10Mbps \n 10BaseT; \xa0 不推薦使用100BaseT4 \n \n \n Cat 5 \n 100Mbps \n 10/100 / 1000BaseT100 / 1000BaseTX \n \n \n Cat 5e \n 1Gbps（1000Mbps） \n 10/100 / 1000BaseT100 / 1000BaseTX \n \n \n Cat 6 \n 1Gbps（1000Mbps） \n 10/100 / 1000BaseT100 / 1000BaseTX10GBaseT \n \n \n Cat 6a \n 10Gbps \n 10/100 / 1000BaseT100 / 1000 / BaseTX10GBaseT \n \n \n Cat 7 \n 10Gbps \n 10/100 / 1000BaseT100 / 1000 / BaseTX10GBaseT \n \n \n \n \n \n \n \n \n 雙絞線連接器\xa0 Twisted Pair Connectors \n Twisted pair cables come with three main types of connectors. The first is the RJ-45 connector, which is an eight-pin connector used in Ethernet networks. Even though most Ethernet networks use only four pins, the RJ-45 provides eight pins for future use and capabilities. The first four pins are used to transmit (two pins) and receive (two pins). \n The RJ-11 connector is used in the standard telephone system. The RJ-11 is a six-pin connector, but commonly only two pins are used for a telephone (transmit and receive). If you have a two-line phone, then four pins are used: two pins to transmit and two pins to receive. \n Finally, the DB-9 connector is used for RS-232 signals. This connector looks like a standard serial connector. It is used commonly for asynchronous serial communications, like connecting to an external modem. In modern networks, you will see this type of connector on a “rollover cable.” A rollover cable has a DB-9 on one side (which is connected to your laptop’s serial port), and an RJ-45 connector on the other side (which is used to connect to Cisco routers and switches to do administration tasks). \n A straight-through cable is a type of twisted pair cable that is used in local area networks to connect a computer to a network hub, such as a router. This type of cable is also sometimes called a patch cable. Both ends of the cable have an identical pinout, hence the name “straight-through.” A crossover cable switches the pinouts of the two ends of the cable, making the transmit and receive pins alternate on the two ends. This allows two workstations to connect directly to each other without the need for a hub, switch, or router. \n 雙絞線電纜帶有三種主要類型的連接器。 第一個是RJ-45連接器，它是以太網網絡中使用的八針連接器。 即使大多數以太網僅使用四個引腳，RJ-45仍提供八個引腳供將來使用和使用。 前四個引腳用於發送（兩個引腳）和接收（兩個引腳）。 \n RJ-11連接器用於標準電話系統。 RJ-11是一個六針連接器，但電話通常僅使用兩個針（發送和接收）。 如果您有兩線電話，則使用四個引腳：兩個引腳進行發送，兩個引腳進行接收。 \n 最後，DB-9連接器用於RS-232信號。 該連接器看起來像標準的串行連接器。 它通常用於異步串行通信，例如連接到外部調製解調器。 在現代網絡中，您將在“翻轉電纜”上看到這種類型的連接器。 翻轉電纜的一側為DB-9（連接到筆記本電腦的串行端口），另一側為RJ-45連接器（用於連接到Cisco路由器和交換機以執行管理任務）。 \n 直通電纜是雙絞線電纜的一種，在局域網中用於將計算機連接到網絡集線器（例如路由器）。 這種類型的電纜有時也稱為跳線。 電纜的兩端都具有相同的引出線，因此名稱為“直通”。 交叉電纜切換電纜兩端的引腳分配，使發送和接收引腳在兩端交替。 這允許兩個工作站直接相互連接，而無需集線器，交換機或路由器。 \n \n 以太網電纜。 \n ------------------------------------------------------------------------------------------------------- \n 同軸電纜 \xa0 Coaxial Cable \n Coaxial cable is a much older media technology. Coaxial cable, also known as coax for short, is composed of two conductors. The inner conductor, which is known as the insulated conductor (center wire), is the copper wire over which data is passed. The outer conductor is the braided metal shield and aids in protecting the inner wire from physical injury and the effects of EMI. Much like the shielding we saw in shielded twisted pair, the outer shield helps keep electromagnetic interference out of the data’s path. Between the inner conductor and the outer shield, we find an insulated core that prevents any data transfer between the inner core and outer shield. The outside of the cable is made of a flexible plastic jacket, much like the twisted pair cabling. Coaxial cabling was included in the first Ethernet standard as 10Base5 (thicknet) and continued to be used throughout updates as 10Base2 (thinnet) as well as being most commonly used in bus and ring networks. UTP cabling however, is easier to work with in a star topology and is significantly less expensive. \n 同軸電纜是一種較為老舊的媒體技術。 同軸電纜（也簡稱為同軸電纜）由兩個導體組成。 內部導體（稱為絕緣導體（中心線））是在其上傳遞數據的銅線。 外導體是編織的金屬屏蔽層，有助於保護內線免受物理傷害和EMI的影響。 就像我們在屏蔽雙絞線中看到的屏蔽一樣，外部屏蔽有助於將電磁干擾保持在數據路徑之外。 在內部導體和外部屏蔽層之間，我們找到了一個絕緣芯，可防止在內芯和外部屏蔽層之間進行任何數據傳輸。 電纜的外部由柔軟的塑料護套製成，非常類似於雙絞線電纜。 同軸電纜已包含在第一個以太網標準中，稱為10Base5（Thicknet），並在整個更新中繼續用作10Base2（Thinnet），並在總線和環形網絡中最常用。 但是，UTP電纜更容易在星形拓撲中使用，並且價格便宜許多。 \n \n 同軸電纜 \n ------------------------------------------------------------------------------------------------------- \n \n \n 同軸電纜類型\xa0 Coaxial Cable Types \n There are three dominant coaxial cable types. The RG-6 is commonly used by cable TV companies to connect individual homes to the TV network. These cables are thick and usually used for outside connections to withstand the effects of the weather. The RG-58 is a type of coaxial cable that was heavily used in early 10Base2 (thinnet) networks, such as bus and ring topologies. Finally, the RG-59 is the traditional coaxial cable used to carry composite video between two nearby devices, such as your TV and the cable box. If you are a cable Internet user, this is also used to carry the WAN connection from your wall jack to your cable modem. \n 共有三種主要的同軸電纜類型。 有線電視公司通常使用RG-6將單個房屋連接到電視網絡。 這些電纜很粗，通常用於外部連接以承受天氣的影響。 RG-58是一種同軸電纜，在諸如總線和環形拓撲之類的早期10Base2（瘦網）網絡中大量使用。 最後，RG-59是傳統的同軸電纜，用於在兩個附近的設備（例如電視和電纜盒）之間傳送複合視頻。 如果您是有線Internet用戶，這也可用於將WAN連接從牆壁插孔連接到電纜調製解調器。 \n \n \n \n \n 同軸電纜連接器\xa0 Coaxial Cable Connectors \n While there were three types of cables, there are only two types of common connectors used with coaxial cable. The first is called BNC, from the name Bayonet Neill-Concelman. Sometimes people also call this the British Naval connector, because the BNC was heavily used by the British in their shipboard radio systems. This connector was commonly used in early Ethernet networks and it has a “push and twist” type of connector to secure the cable to the network device. \n The F-type connector is the modern type of coaxial cable connector. It is typically used for cable TV and cable modem connections. It is connected by screwing the connector onto a threaded jack to secure the connection. \n 雖然有三種類型的電纜，但同軸電纜僅使用兩種類型的普通連接器。第一個稱為BNC，名稱為刺刀Neill-Concelman。有時人們也將其稱為英國海軍連接器，因為英國人在其艦載無線電系統中大量使用了BNC。該連接器通常用於早期的以太網網絡，並且具有“推壓式”連接器，用於將電纜固定至網絡設備。 \n F型連接器是現代類型的同軸電纜連接器。 它通常用於有線電視和電纜調製解調器的連接。 通過將連接器擰到帶螺紋的插孔上進行連接以固定連接。 \n \n 同軸插孔。 \n 銅線和光纖\xa0 Copper vs. Fiber \n When we compare the advantages and disadvantages of fiber-optic cables and copper (twisted pair) cables, we have to consider that fiber-optic has a higher bandwidth (measured in Gbps or Tbps), it can carry its signal many miles without the need of a repeater, it is immune to the effects of EMI, and it has much better security than traditional twisted pair cables. However, twisted pair cabling does hold some advantages of its own. For one, it is much less expensive than fiber-optic cabling. Also, copper wiring is much easier to install, taking only a few hours to learn. Finally, twisted pair cabling can be created and terminated using inexpensive tools. For example, a complete copper wiring toolset can be bought online for less than $50, while a complete fiber-optic kit may cost $1000 or more. For these reasons, copper has remained the dominant media in most local area networks. \n 當我們比較光纖電纜和銅纜（雙絞線）的優缺點時，我們必須考慮到光纖具有更高的帶寬（以Gbps或Tbps為單位），它可以將信號傳輸很多英里而無需作為中繼器，它不受EMI的影響，並且比傳統的雙絞線電纜具有更好的安全性。 但是，雙絞線電纜確實具有其自身的一些優點。 首先，它比光纖電纜便宜得多。 而且，銅線的安裝更容易，只需幾個小時即可學習。 最後，可以使用廉價的工具創建和終止雙絞線電纜。 例如，一套完整的銅線工具套件可以在線購買，價格不到50美元。由於這些原因，一套完整的光纖套件的價格可能在1000美元以上。 \n ------------------------------------------------------------------------------------------------------- 轉換器\xa0\xa0 Converters \n Because of the wide variety of cable and connector types, there is sometimes a need to convert from one type of media to another. For example, if you have to make a connection between two LANs in buildings that are located one mile apart, but your network uses Cat 5e, UTP cabling, how can you make that connection? When you look at your routers, you find they only accept RJ-45 connections, but you know that you cannot run a Cat 5e cable more than 100 meters. How can you solve this problem? With a media converter. \n Using a media converter, you can convert your RJ-45 connection into an ST, SC, or LC fiber connection, as shown in the image below. Then, you run the one-mile fiber cable to the other building, and use a media converter to convert from the ST, SC, or LC fiber connection back to the RJ-45 the other router requires. Because this is a simple, “dumb” device, it simply converts whatever is received on the first media type and repeats it back out the second media type. Common types of media converters are from Ethernet (copper) to fiber-optic (and back) or coaxial to fiber-optic (and back). \n 由於電纜和連接器的類型多種多樣，有時需要從一種介質轉換為另一種介質。例如，如果您必須在相距一英里的建築物中的兩個LAN之間建立連接，但是您的網絡使用Cat 5e，UTP電纜，那麼如何建立連接？當您查看路由器時，會發現它們僅接受RJ-45連接，但您知道不能將Cat 5e電纜的長度超過100米。您如何解決這個問題？帶媒體轉換器。 \n 使用媒體轉換器，您可以將RJ-45連接轉換為ST，SC或LC光纖連接，如下圖所示。 然後，將一英里的光纜連接到另一座建築物，並使用媒體轉換器將ST，SC或LC光纖連接轉換回另一台路由器所需的RJ-45。 因為這是一個簡單的“啞”設備，所以它僅轉換在第一媒體類型上接收到的所有內容，然後將其重複播放回第二媒體類型。 媒體轉換器的常見類型是從以太網（銅）到光纖（然後向後）或從同軸電纜到光纖（然後向後）。 \n \n 媒體轉換器。 \n \n \n \n', 'tags': '', 'url': 'PCH11.html'}]};
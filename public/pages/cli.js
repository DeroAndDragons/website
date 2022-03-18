const downloads = [
  {
    version: "v1.0.0",
    date: "2022/04/30",
    size: "5.4KB",
    links: {
      windows_amd64: "",
      linux_amd64: "",
      linux_arm64: "",
      darwin_amd64: "",
      darwin_arm64: "",
      freebsd_amd64: ""
    }
  }
]

export default () => {
  return <div>
    <h1>Command Line Interface</h1>
    <div>Download Dero & Dragons CLI for your platform and start minting cards.</div>
    <div class="table-overflow">
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Size</th>
            <th>Download links</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((download) => {
            const { version, date, size, links } = download
            return <tr>
              <td>{version}</td>
              <td>{date}</td>
              <td>{size}</td>
              <td>
                {Object.keys(links).map(key => {
                  return <><a href="">{key}</a>&nbsp;&nbsp;</>
                })}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}

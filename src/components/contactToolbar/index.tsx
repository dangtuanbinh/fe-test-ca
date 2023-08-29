import { ContactMocks } from "../../mocks/contactMocks";
import "./styles.scss";

const classNamePrefix = "contact-toolbar";

const ContactToolbar = () => {
  return (
    <div className={classNamePrefix}>
      {ContactMocks &&
        ContactMocks.map((c) => (
          <img
            src={c.icon}
            alt=""
            style={{
              width: c.id === 2 ? 100 : 86,
              height: c.id === 2 ? 100 : 86,
            }}
          />
        ))}
    </div>
  );
};

export default ContactToolbar;

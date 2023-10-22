import Badge from "react-bootstrap/Badge";
export const Tags = ({ badgeText, badgeColor }) => {
  return (
    <Badge className="badge" bg={badgeColor}>
      {badgeText}
    </Badge>
  );
};
